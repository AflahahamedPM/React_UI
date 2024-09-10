import gradientImage from "/gradient1.png"

const AboutSchoolCards = ({id, title, description}) => {
  return (
        <div
          className="border-[1px] w-[300px] lg:h-[290px] max-lg:h-[200px] rounded-[30px] border-white px-4 flex flex-col justify-center items-left mx-auto"
          style={{
            backgroundImage: `url(${gradientImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="lg:text-5xl max-lg:text-3xl bg-gradient-to-b from-custom-green to-white bg-clip-text text-transparent mb-2">
            {id}
          </h1>
          <h1 className="text-2xl bg-gradient-to-r from-custom-green to-white bg-clip-text text-transparent lg:mb-4 mb-2">
            {title}
          </h1>
          <h1 className="lg:text-sm max-lg:text-xs">{description}</h1>
          <button className="border-[1px] self-end border-white rounded-full text-xs hover:bg-custom-green hover:text-white text-custom-green px-4 py-1 max-lg:mt-2">
            Read more
          </button>
        </div>
  );
};

export default AboutSchoolCards;
