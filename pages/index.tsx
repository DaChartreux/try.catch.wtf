import React from "react";
import type { NextPage } from "next";

import Button from "@components/Button";
import Example from "@components/Navbar";
import { useAppTheme } from "@components/ui/AppThemeProvider";
import Categories from "@components/sections/Categories";

const Home: NextPage = () => {
  const { changeTheme } = useAppTheme();

  return (
    <>
      <Example />
      <Button
        bgColor="#8B5CF6"
        hoverBgColor="#7C3AED"
        activeBgColor="#6D28D9"
        fgColor="#ffffff"
        onClick={changeTheme}
      >
        Text
      </Button>
      <div style={{ display: "block", width: "200px" }}>
        <Categories
          categories={[
            { category: "ReactJS", slug: "test" },
            { category: "FFMPEG", slug: "test" },
            { category: "TypeScript", slug: "test" },
            { category: "", slug: "test" },
            { category: "Test", slug: "test" },
            { category: "Test", slug: "test" },
            { category: "Test", slug: "test" },
          ]}
        />
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
      cupiditate minima modi sit nostrum veritatis quam illo inventore corrupti
      doloremque officia tempore odit recusandae unde, itaque molestias dicta
      quo dignissimos maiores et ad dolore similique atque! Explicabo illo sint
      voluptatem laboriosam aut reiciendis iste ipsa praesentium fugit
      necessitatibus, alias vel dignissimos. At exercitationem omnis harum
      molestiae, ducimus minima laborum dolorem quasi id blanditiis laboriosam
      eveniet perferendis fuga eum veritatis cumque accusantium itaque accusamus
      debitis rerum magni ad quibusdam! Nobis fuga tempore quae accusamus saepe,
      omnis consequuntur quisquam error nulla aliquam tempora rem blanditiis.
      Voluptatum dicta sed beatae aut dignissimos officia expedita quo modi,
      omnis maiores eum ab, laborum neque ullam? Voluptatem sed, earum dolor
      autem nesciunt eos nostrum temporibus repellendus facilis ullam vel quidem
      esse, hic quaerat facere blanditiis beatae magnam id consequuntur, saepe
      assumenda voluptate sequi dolore? Unde harum dolore amet aspernatur
      aperiam, quia quod totam deserunt rerum vel eum ut eveniet sit sunt non,
      cupiditate cumque modi! Magnam nihil, veritatis incidunt soluta ipsam,
      ratione ea voluptatibus, impedit expedita beatae excepturi? Nam vitae
      minus possimus similique fugit tempora odio lLorem ipsum dolor sit amet
      consectetur adipisicing elit. Placeat, cupiditate minima modi sit nostrum
      veritatis quam illo inventore corrupti doloremque officia tempore odit
      recusandae unde, itaque molestias dicta quo dignissimos maiores et ad
      dolore similique atque! Explicabo illo sint voluptatem laboriosam aut
      reiciendis iste ipsa praesentium fugit necessitatibus, alias vel
      dignissimos. At exercitationem omnis harum molestiae, ducimus minima
      laborum dolorem quasi id blanditiis laboriosam eveniet perferendis fuga
      eum veritatis cumque accusantium itaque accusamus debitis rerum magni ad
      quibusdam! Nobis fuga tempore quae accusamus saepe, omnis consequuntur
      quisquam error nulla aliquam tempora rem blanditiis. Voluptatum dicta sed
      beatae aut dignissimos officia expedita quo modi, omnis maiores eum ab,
      laborum neque ullam? Voluptatem sed, earum dolor autem nesciunt eos
      nostrum temporibus repellendus facilis ullam vel quidem esse, hic quaerat
      facere blanditiis beatae magnam id consequuntur, saepe assumenda voluptate
      sequi dolore? Unde harum dolore amet aspernatur aperiam, quia quod totam
      deserunt rerum vel eum ut eveniet sit sunt non, cupiditate cumque modi!
      Magnam nihil, veritatis incidunt soluta ipsam, ratione ea voluptatibus,
      impedit expedita beatae excepturi? Nam vitae minus possimus similique
      fugit tempora odio lLorem ipsum dolor sit amet consectetur adipisicing
      elit. Placeat, cupiditate minima modi sit nostrum veritatis quam illo
      inventore corrupti doloremque officia tempore odit recusandae unde, itaque
      molestias dicta quo dignissimos maiores et ad dolore similique atque!
      Explicabo illo sint voluptatem laboriosam aut reiciendis iste ipsa
      praesentium fugit necessitatibus, alias vel dignissimos. At exercitationem
      omnis harum molestiae, ducimus minima laborum dolorem quasi id blanditiis
      laboriosam eveniet perferendis fuga eum veritatis cumque accusantium
      itaque accusamus debitis rerum magni ad quibusdam! Nobis fuga tempore quae
      accusamus saepe, omnis consequuntur quisquam error nulla aliquam tempora
      rem blanditiis. Voluptatum dicta sed beatae aut dignissimos officia
      expedita quo modi, omnis maiores eum ab, laborum neque ullam? Voluptatem
      sed, earum dolor autem nesciunt eos nostrum temporibus repellendus facilis
      ullam vel quidem esse, hic quaerat facere blanditiis beatae magnam id
      consequuntur, saepe assumenda voluptate sequi dolore? Unde harum dolore
      amet aspernatur aperiam, quia quod totam deserunt rerum vel eum ut eveniet
      sit sunt non, cupiditate cumque modi! Magnam nihil, veritatis incidunt
      soluta ipsam, ratione ea voluptatibus, impedit expedita beatae excepturi?
      Nam vitae minus possimus similique fugit tempora odio lLorem ipsum dolor
      sit amet consectetur adipisicing elit. Placeat, cupiditate minima modi sit
      nostrum veritatis quam illo inventore corrupti doloremque officia tempore
      odit recusandae unde, itaque molestias dicta quo dignissimos maiores et ad
      dolore similique atque! Explicabo illo sint voluptatem laboriosam aut
      reiciendis iste ipsa praesentium fugit necessitatibus, alias vel
      dignissimos. At exercitationem omnis harum molestiae, ducimus minima
      laborum dolorem quasi id blanditiis laboriosam eveniet perferendis fuga
      eum veritatis cumque accusantium itaque accusamus debitis rerum magni ad
      quibusdam! Nobis fuga tempore quae accusamus saepe, omnis consequuntur
      quisquam error nulla aliquam tempora rem blanditiis. Voluptatum dicta sed
      beatae aut dignissimos officia expedita quo modi, omnis maiores eum ab,
      laborum neque ullam? Voluptatem sed, earum dolor autem nesciunt eos
      nostrum temporibus repellendus facilis ullam vel quidem esse, hic quaerat
      facere blanditiis beatae magnam id consequuntur, saepe assumenda voluptate
      sequi dolore? Unde harum dolore amet aspernatur aperiam, quia quod totam
      deserunt rerum vel eum ut eveniet sit sunt non, cupiditate cumque modi!
      Magnam nihil, veritatis incidunt soluta ipsam, ratione ea voluptatibus,
      impedit expedita beatae excepturi? Nam vitae minus possimus similique
      fugit tempora odio laudantium sit quae deserunt voluptate saepe, non,
      voluptatibus, dolores quo quaerat ab atque. Blanditiis totam illum fugiat
      minus sit eos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quis quasi magni id sequi deserunt qui sapiente reiciendis corrupti sint
      minus eius aut perspiciatis porro nobis dicta perferendis, blanditiis fuga
      excepturi quo culpa voluptatum laboriosam quisquam in autem. Asperiores et
      voluptatum porro quisquam sed, id voluptas, vel rem obcaecati minus sunt
      neque nesciunt nulla iusto! Modi, sapiente beatae blanditiis pariatur
      excepturi fuga. Aut ex, fugit unde temporibus facere deleniti suscipit
      nisi perspiciatis maiores ipsam laboriosam. Obcaecati reprehenderit unde
      sapiente fugiat at harum asperiores nostrum tempora vero. Facere a libero,
      culpa ipsam ipsum autem laboriosam, voluptas non saepe eligendi commodi
      laborum quisquam nihil dolores optio nobis? Ratione, similique dolores
      tenetur voluptates aliquid omnis beatae officia eius aperiam accusamus?
      Dolores est, officiis autem sint accusamus ab corrupti animi ex temporibus
      fuga rerum repellat debitis in dicta ullam? Nobis voluptatem quaerat
      excepturi nemo, dicta molestiae earum, blanditiis quod commodi velit
      asperiores nam magni autem illum qui eligendi harum possimus magnam vel
      unde fuga. Obcaecati, itaque qui! Molestiae saepe laboriosam iure quos
      dolorem quo minus quidem commodi facilis, eum delectus tempore,
      necessitatibus omnis quod dolores aperiam doloribus soluta fuga officiis?
      Porro ratione pariatur eos, asperiores nobis at quae voluptatum qui,
      voluptate nemo quo quas nisi. Illo ad assumenda voluptatem voluptatum
      dolorem placeat est nisi nobis nihil rerum corporis esse illum
      consequatur, incidunt tempora, aut et, nemo molestiae! Qui voluptatibus
      deserunt ducimus tenetur aspernatur cupiditate maxime neque voluptates? Ad
      odio consectetur quaerat odit beatae harum deserunt natus rerum. Quae sit
      ab harum quos architecto quaerat deleniti necessitatibus quibusdam!
      Tempore libero repellat eos accusamus, temporibus eius. Aliquid fugiat
      temporibus ad sint velit non neque error corporis, nobis voluptatibus
      impedit esse cupiditate nemo accusamus architecto commodi labore
      dignissimos, quo alias placeat sunt? Exercitationem aspernatur velit nemo,
      laborum commodi accusantium numquam eveniet, cum, expedita dolores fugit
      iusto tempore voluptatem consequatur sint alias. Dolores alias sunt
      maiores, ducimus iusto ullam eaque ut ipsam velit obcaecati qui impedit
      quis! Excepturi minus fuga hic nemo obcaecati blanditiis animi, a pariatur
      error est maiores dolor asperiores non veritatis molestias nesciunt, quos
      rerum consequatur sint rem ut? Nam impedit cum tenetur! Aperiam inventore
      ea vel ullam velit pariatur tempore voluptatum. Repellat, officia et
      incidunt quibusdam pariatur iste expedita optio fugiat nostrum illum rem
      maxime eveniet, libero dolorum odio animi culpa magni? Eligendi quasi
      facere aliquam molestias a possimus rem, ex blanditiis corrupti veniam,
      sint numquam eius quisquam quas impedit? Debitis fugiat saepe repudiandae
      quis voluptas sequi eligendi. Sunt quod voluptatibus dolor omnis
      dignissimos, alias ad. Suscipit voluptates explicabo corrupti iure fuga
      molestiae repellendus cumque magni in eos dolorem ut unde tempore officiis
      quas enim impedit nostrum modi, nemo ipsam, delectus ullam ad sed! Cumque
      inventore porro illum commodi adipisci? Magnam ab aut perferendis eaque
      alias accusantium ex amet tempora, nobis repudiandae consequatur
      distinctio minima, quo reiciendis expedita molestiae odio error culpa
      debitis. Explicabo ullam accusamus ipsum aspernatur. Placeat dolorem esse
      architecto est error dolorum velit facilis qui sapiente, nam eligendi sit
      ratione voluptatibus quos nobis quis vero fuga quam laudantium distinctio
      recusandae reprehenderit? Molestiae!
    </>
  );
};

export default Home;
