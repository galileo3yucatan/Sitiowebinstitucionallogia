import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const facebookPosts = [
  "https://www.facebook.com/Galileo03/posts/pfbid02P7gm66x8ZSNNN6wiMWkq6BXGBkEPsT14f1nnn5u7onVtr4R8shk7y6LaewvykPgZl",
  "https://www.facebook.com/Galileo03/posts/pfbid02rUWTodcMw3ukQtarTAMsDvcmpFz6jVKSctonzjiXdjuqzPRmxKutRJDbatjWZq3ul",
  "https://www.facebook.com/Galileo03/posts/pfbid02s2WQQFPRnTRYaFnHcsHfAztKrY5igyfF957wjqTDSQ2nJD3wYQi6SnSSYqfqkEA5l",
  "https://www.facebook.com/Galileo03/posts/pfbid0jCxb5nsZhN3u9C4WyP8w3wuieTNaRDh1u1Wtr4MzzNpjgKEiXAmGP7WuxVdJxw17l",
  "https://www.facebook.com/Galileo03/posts/pfbid02Lpn2nDoJtt7oUJJbMWt74aAHBwo9CSuuQpwxsCv6PM5PrRCw98eKgkR16WmN8k6Pl",
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-90 shadow-lg"
      style={{ backgroundColor: "#FFE31A", color: "#2B2F9E" }}
      aria-label="Siguiente"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:opacity-90 shadow-lg"
      style={{ backgroundColor: "#FFE31A", color: "#2B2F9E" }}
      aria-label="Anterior"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
}

export default function FacebookPostsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section
      id="publicaciones"
      className="py-24 px-8 relative"
      style={{
        background:
          "linear-gradient(135deg, #1a1d5e 0%, #2B2F9E 50%, #3d42b8 100%)",
        scrollMarginTop: "80px",
      }}
    >
      <style>
        {`
          .custom-dots {
            bottom: -50px;
          }
          .custom-dots li button:before {
            color: #FFE31A;
            font-size: 12px;
            opacity: 0.5;
          }
          .custom-dots li.slick-active button:before {
            opacity: 1;
            color: #FFE31A;
          }
          .fb-post-container {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 500px;
            padding: 0;
          }
          .fb-post-container iframe {
            margin: 0 auto;
            display: block;
          }

          .fb-post-wrapper {
            width: 360px;
            max-width: 90vw;
            height: 310px;
            overflow: hidden;
            border-radius: 12px;
            margin: 0 auto;
            background: transparent;
          }

          @media (max-width: 768px) {
            .fb-post-wrapper {
              width: 360px;
              max-width: 92vw;
              height: 310px;
            }

            #publicaciones {
              padding-left: 12px;
              padding-right: 12px;
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <h2
          className="mb-6 text-center text-white"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "3rem",
            fontWeight: 600,
          }}
        >
          Publicaciones Recientes
        </h2>

        <div
          className="w-24 h-1 mx-auto mb-8"
          style={{ backgroundColor: "#E63946" }}
        ></div>

        <p
          className="text-lg leading-relaxed text-center mb-16 opacity-90 max-w-3xl mx-auto"
          style={{ color: "#fff" }}
        >
          Consulta nuestras reflexiones, actividades y
          acontecimientos más recientes.
        </p>

         <div className="px-2 md:px-12">
          <Slider {...settings}>
            {facebookPosts.map((postUrl, index) => {
              const encodedUrl = encodeURIComponent(postUrl);
              return (
                <div key={index} className="px-4">
                  <div className="fb-post-wrapper">
                    <iframe
                      src={`https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=false&width=360`}
                      width="360"
                      height="310"
                      style={{
                        border: "none",
                        overflow: "hidden",
                      }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title={`Publicación Galileo 3 ${index + 1}`}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}