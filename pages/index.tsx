import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Skill, Project, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo | null;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[#34495e] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#A4805B]/80">
      <Head>
        <title>Sergio's Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-xl filter grayscale hover:grayscale-0 cursor-pointer" src="https://res.cloudinary.com/dphpfdsk3/image/upload/v1769876181/arrow-up_mri298.png" alt="" />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const projects = await fetchProjects();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo: pageInfo ?? null,
      experiences: experiences ?? [],
      skills: skills ?? [],
      projects: projects ?? [],
      socials: socials ?? [],
    },
    revalidate: 10,
  }
}