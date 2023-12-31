import Image from 'next/image'
import Button from './Button';

const SectionHero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"></div>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Путешествуй в Приморье</h1>
        <p className="regular-16 mt-6 text-gray-50 xl:max-w-[520px]">
          Мы хотим быть в каждом вашем путешествии в поисках удовлетворения от
          созерцания нетленной красоты природы. Мы можем помочь вам в
          путешествии по всему миру всего в одном приложении.
        </p>
        <div className="flex flex-wrap my-11 gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt="star"
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            2340+
            <span className="regular-16 lg:regular-20 ml-2">
              Отличных отзыва
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full sm:flex-row">
          <Button
            type="button"
            title="Скачать Приложение"
            variant="btn_green"
          />
          <Button
            type="button"
            title="Как мы работаем?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Расположение</p>
            </div>
            <p className="bold-20 text-white">Гора Приморская</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Расстояние</p>
              <p className="bold-20 text-white">278 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Высота</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHero