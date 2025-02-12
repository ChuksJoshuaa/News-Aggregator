import { TabSelector } from '@/components';
import { ArticleSource, Home, PersonalizedFeed } from "@/pages";
import { setPage, setPageSize } from '@/redux/features/newsSlice';
import { useAppDispatch } from '@/redux/hooks';
import { TabData } from '@/utils/data';
import { useState } from 'react';


const Main = () => {
    const dispatch = useAppDispatch()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedTab, setSelectedTab] = useState("personalizedFeed");
    
    const getTabSelectorUI = (isSelected: boolean) =>
      `card-bg-color-5 inline-block uppercase ${
        isSelected
          ? "text-gray-700 font-bold border-gray-700 border-b-2 opacity-100"
          : "text-textColor font-normal border-[#E4E4E4] border-b-0 opacity-75"
      } rounded-t-lg py-3 px-10 text-sm text-center whitespace-nowrap`;

    const getTabComponent = () => {
      switch (selectedTab) {
          case 'personalizedFeed':
                return <PersonalizedFeed />
            case 'allArticles':
                return <Home />
            case 'articleSources':
                return <ArticleSource />
            default:
                return <></>
        }
    }
  return (
    <div className="flex flex-col gap-4 mt-10 card-bg-color-5 rounded-lg p-4 overflow-y-auto h-full" style={{ minHeight: '100vh'}}>
      <div className="bg-gray-50 rounded-sm p-5 h-full main-container">
        <div className="relative">
          <TabSelector
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            tabs={TabData}
            getTabClass={getTabSelectorUI}
            setSelectedTab={(tab) => {
              setSelectedTab(tab as string);
              dispatch(setPage(1));
              dispatch(setPageSize(10))
            }}
            selectedTab={selectedTab}
          />
        </div>

        {getTabComponent()}
      </div>
    </div>
  );
}

export default Main