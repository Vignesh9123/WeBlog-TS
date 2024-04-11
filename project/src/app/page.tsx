"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import ScrollButton from "./components/main/scrolltotopbutton";
export default function AuroraBackgroundDemo() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
   
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 300) {

        setIsVisible(true)
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const words = [
    {
      text: "Write",
    },
    {
      text: "your",
    },
    {
      text: "content",
    },
    {
      text: "on",
    },
    {
      text: "WeBlog",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (<>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
    <div className="flex flex-col items-center justify-center h-[25rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Explore insightful articles written by our talented writers
      </p>
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 font-bold dark:text-neutral-200 text-xs sm:text-base  ">
      The best part is you can write great articles too.
      </p>
      <div className="mt-5 flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>

      </motion.div>
    </AuroraBackground>
    <hr />
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum alias numquam voluptatem at illum ea velit dolorum? Perferendis obcaecati aliquid iure suscipit, est quae autem error veniam, repellendus aliquam odio consequuntur magni repellat voluptate minus deleniti similique veritatis assumenda. Iure a culpa ducimus iusto laboriosam quis mollitia voluptatum, earum animi nisi inventore! Vero tenetur voluptatibus sed distinctio obcaecati aliquam deleniti officia ratione repudiandae sit veniam nihil sequi id temporibus ut, blanditiis ea similique, eos in doloremque consequatur maxime! In dolore nulla culpa omnis quas. Natus sed debitis amet nobis soluta. Deserunt cum velit provident ducimus quod veritatis, accusantium ab dolore consequuntur at atque excepturi, beatae doloremque placeat praesentium dolorum aliquam quas, esse perspiciatis! Vel optio hic non iure rem doloribus dignissimos veniam enim. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas perferendis saepe dolor mollitia quibusdam magni, ipsa itaque at quasi culpa nam doloribus, pariatur eveniet veritatis odit aperiam, suscipit labore maiores. Ducimus voluptates aliquid explicabo rerum libero ad delectus voluptas modi quos nostrum alias vel perferendis numquam provident natus dignissimos eligendi molestiae a quaerat nemo, aliquam assumenda sunt! Alias iure magnam provident modi aspernatur sapiente, saepe mollitia a itaque numquam unde necessitatibus labore impedit pariatur dolor voluptatem facere accusantium obcaecati reiciendis sed dignissimos ut nobis! Cupiditate, ab expedita repudiandae nam reprehenderit soluta, enim totam porro rem id ducimus quo corrupti architecto labore aut sit ipsa! Itaque, veniam ratione fugiat ipsam quam quae vel illo sint? Pariatur libero consequatur dolores id ex, accusamus beatae possimus soluta qui facilis. Debitis quidem iste voluptas facilis hic excepturi vero repudiandae a consectetur nobis voluptatum sed molestiae qui, expedita repellat, perspiciatis odio, iure facere voluptatem dicta dignissimos? Sequi tempore veniam quae asperiores possimus suscipit atque, aspernatur minus nihil quibusdam nam nulla in architecto qui itaque eum ex voluptates deleniti perspiciatis tenetur. Voluptatibus numquam quasi impedit iusto accusamus quas amet possimus nihil nulla doloribus accusantium, vero dignissimos quae eligendi temporibus quibusdam non ratione dolores consequuntur omnis. Praesentium quo laudantium eveniet veritatis? Minima iusto in quasi nobis tempora dolores laborum nihil impedit assumenda ipsam repudiandae fugit itaque, velit necessitatibus aspernatur sapiente quae, numquam, harum beatae veniam quibusdam? Ipsa, impedit vero facere dolorum totam veritatis quos ea debitis facilis beatae! Laudantium hic fugit explicabo. Laborum consequuntur laudantium totam quaerat dignissimos in quos sed sit praesentium, odio perspiciatis provident accusantium, aliquam facilis quidem. Explicabo rem sapiente quibusdam voluptatum qui labore dolor. Earum enim soluta vero, hic illum, eum, laboriosam assumenda sit harum ea omnis nesciunt reiciendis mollitia accusamus cupiditate. Libero possimus recusandae iste accusantium, sapiente nobis placeat tempore consequuntur hic minus aliquid fugit voluptas veritatis, repellendus odio dolor repudiandae! Veritatis nihil recusandae soluta dolorem illo quisquam fugiat maxime in error ipsam rem aspernatur cum repudiandae eos ea modi cupiditate, architecto dolor ab quidem, praesentium voluptas quia quis sapiente? Ut excepturi quis vel delectus inventore. Suscipit harum soluta in provident. Consequatur quas explicabo veniam deserunt quaerat quos amet adipisci ut saepe, cum facere earum a, error blanditiis incidunt distinctio sunt molestiae molestias assumenda harum excepturi odit dicta quod in! Sed aliquam perferendis culpa possimus voluptatum qui minus optio ullam autem, nesciunt nostrum voluptates placeat enim? Sapiente modi odio eius et impedit nihil, error rem expedita quibusdam officiis assumenda autem minus quasi facere porro molestias alias deleniti eaque! Tempore, obcaecati dolorum quia asperiores expedita provident! Illum maxime fugiat ex reiciendis possimus labore itaque omnis autem, unde, dicta rem temporibus animi sint maiores ipsa, laudantium delectus quasi facilis ad! Incidunt quas nisi voluptatibus adipisci iste consequatur commodi voluptates ducimus laboriosam sit eveniet, possimus corporis maiores eos facilis eum. Assumenda culpa, possimus expedita fuga sunt pariatur ducimus ex! Deleniti dolor aliquid corrupti nulla. Earum qui aliquam maxime rerum natus cupiditate animi quos odio aperiam tenetur. Asperiores tenetur, minus, neque illum vel repudiandae voluptate obcaecati ex corrupti reiciendis omnis soluta iusto esse eveniet beatae sunt fuga quod incidunt sequi alias ducimus fugiat ullam. Aliquam veritatis dolor accusantium, voluptatibus reiciendis recusandae rerum est! Unde maxime ducimus error delectus. Facere quas officiis impedit eos molestiae facilis omnis nemo vero modi voluptates iure autem quasi corrupti id, aspernatur quaerat maiores, ab dolore illo laudantium culpa quia laborum vitae ratione. Tempora, soluta tenetur provident ab cum suscipit voluptates numquam. Iste, voluptate, itaque sunt vero illo porro eaque illum optio expedita repudiandae error! Fugit, magnam est autem voluptates totam impedit harum perferendis qui ipsum voluptatibus neque asperiores ratione quod nemo perspiciatis maiores nam, amet soluta vitae alias maxime iusto. Fugiat repudiandae adipisci ipsa dolore dolor culpa odio, optio cumque neque modi, dicta alias, sunt ipsam! Harum, eum impedit voluptatum facere et unde error quasi quo? Saepe laboriosam molestiae quaerat nam aliquam numquam labore iure nisi optio fugit ea quis quo omnis et, fugiat officia tempore dolorem unde officiis eveniet eaque perferendis! Asperiores fugit saepe nulla sunt quibusdam, sint ipsum animi, a quod voluptatibus aperiam quaerat repellendus natus porro et distinctio? Eligendi quos perferendis, ea nesciunt fugiat architecto esse deleniti ab repellendus suscipit, quo voluptatem nisi. Qui sed omnis unde voluptas. Facilis recusandae reiciendis illum sequi harum sunt voluptatibus perferendis! Blanditiis molestiae saepe esse debitis aperiam nemo ad ullam! Ducimus rerum fugit praesentium est doloribus numquam corporis magni laborum velit eius consectetur veritatis molestiae et eos rem a, soluta vero explicabo? Eaque repellat aut exercitationem, blanditiis iusto harum odio et amet facilis. Facere odit aperiam alias? Adipisci rem velit fugit reiciendis iste. Quis cupiditate nulla magni tempora quia voluptas vitae minima repellat eveniet adipisci non, rerum aperiam perferendis impedit ullam unde, tenetur ab! Nisi quas unde dolores accusamus. Ex fuga accusantium beatae blanditiis, aut aliquam fugiat quaerat iusto eum iste hic alias ducimus! Perspiciatis, nihil ipsam consequuntur odio cumque necessitatibus rem vel dolorem maiores voluptatem dolorum dolores dolor explicabo possimus reiciendis qui sunt laboriosam itaque non. Nisi itaque earum doloremque reiciendis in ipsam adipisci dolores. Recusandae libero iusto dolorum vero aliquam qui unde impedit hic, amet deleniti totam. Dolores nulla nemo maxime, impedit officiis autem voluptatem ad velit aspernatur pariatur unde consequatur expedita reprehenderit, voluptate saepe ducimus a debitis accusamus officia. Et illo pariatur nam voluptate iure, atque nisi officia asperiores, quidem sed quis, maxime itaque temporibus repellendus inventore eaque? Vel quibusdam, cupiditate ab, eligendi consequuntur iure sequi deserunt quam mollitia atque nam deleniti a? Dolores dignissimos commodi rem cupiditate illo debitis deleniti consectetur eveniet perspiciatis, laborum aliquam saepe dolorem suscipit animi dolore neque! Dolore corporis, laborum eum eius dolorum corrupti error expedita atque. Animi quae neque repellat possimus tempore alias voluptatem nesciunt placeat, totam in dolorem voluptas et ad quasi corporis aliquid accusamus facilis dicta sapiente quisquam amet! Consectetur assumenda quisquam quam. Incidunt corporis minus facilis sit eligendi id, odio dolorum voluptatem qui nihil cumque? Magni totam architecto vitae laborum odio cum exercitationem? Inventore deleniti repellendus dolorem!</div>
    <hr />
    {isVisible && (
       <ScrollButton/>
      )}
    </>

  );
}


// export function TypewriterEffectSmoothDemo() {
  
//   return (
//     <div className="flex flex-col items-center justify-center h-[40rem]  ">
//       <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
//         The road to freedom starts from here
//       </p>
//       <TypewriterEffectSmooth words={words} />
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
//         <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
//           Join now
//         </button>
//         <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
//           Signup
//         </button>
//       </div>
//     </div>
//   );
// }
