import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Main = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer",
        "Graphic Designer",
        "Web Designer",
        "Vedio Editer",
      ],
      typeSpeed: 40,
      backSpeed: 40,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main>
      <section class="firstSection">
        <div class="lefttSection">
          <div>
            Hi, My Name Is <span class="purple">Waqar</span>
          </div>
          <div>and i am a passionate</div>
          <span id="element"></span>
          <span ref={typedElement} />;
          <div class="buttons">
            <button class="btn">Download Resume</button>
            <button class="btn">Visit Github</button>
          </div>
        </div>
        <div class="rightSection">
          <img src="./img2.png" alt="" />
        </div>
      </section>
      <hr />
      <section class="secondSection">
        <span class="text-gray">What I have done so for </span>
        <h1 className="text">Work Experience</h1>
        <div class="box">
          <div class="vertical">
            <img class="img-top" src="./top.png" alt="" />
            <div class="vertical-title">
              HTML Developer
              <div>(2015-2016)</div>
            </div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              corrupti sunt facere odio consequuntur? Id, praesentium. Rem
              voluptatem, assumenda aperiam necessitatibus alias voluptatibus.
            </div>
          </div>

          <div class="vertical">
            <img class="img-top" src="./logo1.png" alt="" />
            <div class="vertical-title">
              Node.js Developer
              <div>(2016-2017)</div>
            </div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              corrupti sunt facere odio consequuntur? Id, praesentium. Rem
              voluptatem, assumenda aperiam necessitatibus alias voluptatibus.
            </div>
          </div>

          <div class="vertical">
            <img class="img-top" src="./twitter.png" alt="" />
            <div class="vertical-title">
              Twitter Developer
              <div>(2020-2023)</div>
            </div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              corrupti sunt facere odio consequuntur? Id, praesentium. Rem
              voluptatem, assumenda aperiam necessitatibus alias voluptatibus.
            </div>
          </div>
          <div class="vertical">
            <img class="img-top" src="./youtube.avif" alt="" />
            <div class="vertical-title">
              youtube Developer
              <div>(2020-2023)</div>
            </div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              corrupti sunt facere odio consequuntur? Id, praesentium. Rem
              voluptatem, assumenda aperiam necessitatibus alias voluptatibus.
            </div>
          </div>

          <div class="vertical">
            <img class="img-top" src="./instagram.png" alt="" />
            <div class="vertical-title">
              Instgram Developer
              <div>(2020-2023)</div>
            </div>
            <div class="vertical-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              corrupti sunt facere odio consequuntur? Id, praesentium. Rem
              voluptatem, assumenda aperiam necessitatibus alias voluptatibus.
            </div>
          </div>

          
        </div>
      </section>
      
    </main>
  );
};

export default Main;
