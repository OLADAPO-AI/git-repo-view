import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div>
        <h2 className=" text-justify">
          👋 Hi there! I'm Oladapo, a passionate front-end engineer with
          expertise in building interactive and performant web applications. 💻
          I specialize in HTML, CSS, and JavaScript, with a strong focus on
          modern frameworks like React.js and Vue.js. I'm also experienced in
          responsive design, UI/UX principles, and cross-browser compatibility.
          🚀 My goal is to create seamless user experiences by crafting clean,
          modular, and well-structured code. I enjoy collaborating with teams to
          turn design mockups into pixel-perfect websites and optimize
          performance using best practices. 🔧 Currently, I'm exploring the
          latest frontend technologies such as Next.js, TypeScript, and GraphQL
          to stay up-to-date with industry trends and deliver high-quality
          solutions. 🌟 Apart from coding, I'm passionate about open-source
          contributions. I believe in giving back to the developer community by
          sharing my knowledge through blog posts and speaking at tech events.
          📫 You can find me on LinkedIn [www.linkedin.com/in/oladapofalusi] or
          check out my personal website [www.oladapofalusi.com] to see my
          portfolio and learn more about my projects. ✨ Let's connect and build
          amazing web experiences together!
        </h2>
      </div>
      <Link to="/">HOME</Link>
    </>
  )
}

export default About
