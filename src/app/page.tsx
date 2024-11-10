import {contents} from "@/constants/content/mainZFlow";
import {IContent} from "@/interface/content";
import ZFlowContents from "@/components/content/ZFlowContents";

export default function Home() {
  return (
      <div className="my-3 md:px-36 sm:px-14 px-6">
          <section className="text-gray-600">
              {
                  Object.keys(contents).map((key,i)=>{
                      const content : IContent = contents[key];
                      return <ZFlowContents key={'content'+i} content={content} rtl={i%2 === 0} />
                  })
              }
          </section>

      </div>
  );
}
