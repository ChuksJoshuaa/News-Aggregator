import useFetch from "@/api/useFetch";
import { DateInput, SelectDropdown, TextInput, useArticleHook } from "@/components";
import { SearchBarProps } from "@/interface";
import { setNumberOfPages } from "@/redux/features/newsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { categoriesOptions, SourceOptions } from "@/utils/data";
import React, { useState } from "react";

const SearchBar: React.FC<SearchBarProps> = ({ isArticleSource }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const { fetchArticles } = useFetch();
  const { page, pageSize } = useAppSelector((state) => state.news);
  const {
    keyword,
    setKeyword,
    date,
    setDate,
    category,
    setCategory,
    source,
    setSource,
  } = useArticleHook()
  
  const handleSearch = async (
    keyword: string,
    filters: {
      date: string;
      category: string;
      source: string;
      isArticleSource: boolean;
    }
  ) => {
    setIsSubmitting(true);
    await fetchArticles(
      keyword,
      filters,
      filters.isArticleSource,
      page,
      pageSize
    ).then((resp) => {
      if (resp) {
        setTimeout(() => {
          setIsSubmitting(false);
          dispatch(setNumberOfPages(resp.totalResults ?? 0));
          setKeyword("");
          setDate("");
        }, 500);
      }
    });
  };

  const handleSubmit = () => {
    handleSearch(keyword, { date, category, source, isArticleSource });
  };
  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const isDisabled = isArticleSource ? !category && !source : !keyword && !date 

  return (
    <div className="bg-white shadow-md rounded px-8 pt-2 pb-2 mb-4 flex flex-col my-2" style={{ height: '320px' }}>
      <div className="-mx-3 flex flex-col mb-6 gap-3">
        {isArticleSource ? (
          <>
            <SelectDropdown
              options={categoriesOptions}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="category"
              placeholder="-- Select Category --"
              label="Category"
            />
            <SelectDropdown
              options={SourceOptions}
              value={source}
              onChange={(e) => setSource(e.target.value)}
              name="source"
              id="source"
              placeholder="-- Select Source --"
              label="Source"
            />
          </>
        ) : (
          <>
            <TextInput
              label="Articles"
              name="searchArticles"
              id="searchArticles"
              placeholder="-- Search articles --"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <DateInput
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
              name="date"
              placeholder=" -- Enter Date --"
              label="Date"
            />
          </>
        )}

        <button
          className={`flex justify-center items-center bg-gray-900 capitalize hover:bg-gray-700 text-white font-[semi-bold] py-[0.7rem] px-4 rounded text-center ${
            (isSubmitting || isDisabled) && "opacity-50"
          }`}
          onClick={handleSubmit}
          onKeyDown={handleEnterKeyPress}
          disabled={isSubmitting || isDisabled}
        >
          {isSubmitting && (
            <div aria-label="Loading..." role="status" className="mr-1">
              <svg className="h-5 w-5 animate-spin" viewBox="3 3 18 18">
                <path
                  className="fill-gray-200"
                  d="M12 5C8.13401 5 5 8.13401 5 12c0 3.866 3.13401 7 7 7 3.866.0 7-3.134 7-7 0-3.86599-3.134-7-7-7zM3 12c0-4.97056 4.02944-9 9-9 4.9706.0 9 4.02944 9 9 0 4.9706-4.0294 9-9 9-4.97056.0-9-4.0294-9-9z"
                ></path>
                <path
                  className="fill-gray-800"
                  d="M16.9497 7.05015c-2.7336-2.73367-7.16578-2.73367-9.89945.0-.39052.39052-1.02369.39052-1.41421.0-.39053-.39053-.39053-1.02369.0-1.41422 3.51472-3.51472 9.21316-3.51472 12.72796.0C18.7545 6.02646 18.7545 6.65962 18.364 7.05015c-.390599999999999.39052-1.0237.39052-1.4143.0z"
                ></path>
              </svg>
            </div>
          )}
          Submit
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
