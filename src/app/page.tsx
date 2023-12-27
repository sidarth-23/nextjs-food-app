import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeader";

export default function Home() {
  return (
    <>

      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            situation enough however ride various elephant stepped chamber those
            queen rough evidence addition usual exact your syllable largest
            loose exist long train stove sense
          </p>
          <p>
            said skill health underline protection tie mean itself development
            explore shelter college mistake breeze bridge occur jungle film
            human map also leaving rising furniture
          </p>
          <p>
            bow many friendly guard carefully this location sent down grow
            frozen pain basket happily valuable policeman fairly mission
            mysterious sure card stone tea recall
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel:+91 95423 84756">+91 95423 84756</a>
        </div>
      </section>
    </>
  );
}
