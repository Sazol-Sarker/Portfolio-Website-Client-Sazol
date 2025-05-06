
const About = () => {
  const CVPdf='https://drive.google.com/uc?export=download&id=1JTH9LbP-MhzmymndqFtm8E_5niW87E5w'
  return (
    <div id="about" className="flex flex-col w-3/5 mx-auto gap-4  *:text-white pt-28 mb-24">
      <h2 className="text-2xl md:text-5xl font-bold">Hi, I'm Sazol Sarker</h2>
      <p className="text-xl md:text-3xl text-gray-500 font-bold mt-2 md:mt-3">Software Engineer</p>
      <p className="text-xl md:text-2xl">
        With over 2 years+ of professional experience building and maintaining
        full stack web applications. Specialized in React and NextJS along with
        Node and Express with a strong ability to solve problems and quickly
        learn new tools.
      </p>

      {/* buttons - about section */}
      <div className="flex flex-col md:flex-row gap-2">
        <button onClick={()=>document.getElementById('contact')?.scrollIntoView()} className="btn">Get in Touch</button>
        <button onClick={()=>document.getElementById('projects')?.scrollIntoView()} className="btn">View Projects</button>
        <button onClick={()=>window.open(CVPdf,'_blank')} className="btn">View Resume</button>
      </div>
    </div>
  );
};

export default About;
