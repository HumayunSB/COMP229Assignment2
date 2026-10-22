// -----------------------------------------------------------------------------
// AboutHero.tsx — the headshot + intro block at the top of /about.
// Author: Humayun Butt
// -----------------------------------------------------------------------------
import hideFaceImage from '../../assets/about-portrait.jpg';
import ResumeDownloadButton from '../ResumeDownloadButton';

export default function AboutHero() {
  return (
    // Two columns above md (fixed 280px headshot + fluid text); single column
    // below md, with the headshot cap-widthed so it doesn't fill the screen.
    <div className="grid gap-8 items-start grid-cols-1 md:grid-cols-[280px_1fr]">
      <img
        src={hideFaceImage}
        alt="Portrait of Humayun Butt"
        width={280}
        height={280}
        className="w-full max-w-[280px] h-auto md:w-[280px] md:h-[280px] object-cover rounded-lg bg-surface-2 border border-border shadow-md"
      />

      <div className="grid gap-3">
        <h2 className="mb-0">Humayun Butt</h2>
        <p className="text-accent font-medium m-0">AI Specialist (Wannabe) · Data Scientist </p>

        <p className="m-0 leading-relaxed">
          I'm an aspiring AI Specialist and Data Scientist with a passion for transforming 
          complex financial data into predictive models and intelligent banking solutions. 
          Over the course of my studies and hands-on projects, I’ve built a strong foundation 
          in modern machine learning, statistical analysis, and data engineering. 
          I have developed a deep appreciation for rigorous algorithm testing, data compliance
          and deploying scalable models that can drive smart financial decision-making.
        </p>

        <p className="m-0 leading-relaxed">
          Outside of work I hike, read broadly, and volunteer teaching intro
          programming at the local library. I care about writing code that is kind
          to the next person who reads it.
        </p>

        {/* `justify-self-start` on the button wrapper keeps it from
            stretching to fill the grid cell. */}
        <div className="justify-self-start mt-2">
          <ResumeDownloadButton />
        </div>
      </div>
    </div>
  );
}
