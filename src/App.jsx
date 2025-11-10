import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [solid, setSolid] = useState(true);
  const [open, setOpen] = useState(false);
  const scrollToElement = (id) => {
    const target = document.getElementById(id);
    const navbar = document.querySelector("nav");
    const offset = navbar.offsetHeight;

    const top = target.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div class="min-h-screen w-screen bg-[#fafafa] text-gray-800">
      <header>
        <nav
          class={`${
            solid ? "bg-white shadow-sm" : "text-white"
          } duration-300 z-[999] fixed w-full h-16 px-4 py-2`}
        >
          <div class="w-full h-full max-w-[1280px] justify-self-center flex justify-between md:grid grid-cols-[3rem_auto_3rem] gap-4">
            <div
              class={`${
                solid ? "text-blue-500" : "text-white"
              } rounded-lg leading-11 text-4xl font-bold flex justify-center items-center`}
            >
              Ex
            </div>
            <ul class="w-full h-full hidden md:flex justify-center items-center gap-8 ">
              <li class="relative">
                <a
                  onClick={() => scrollToElement("service")}
                  class={`${
                    solid ? " hover:text-blue-500 peer" : "hover:text-black"
                  } cursor-pointer px-2 font-bold tracking-wide`}
                >
                  Layanan
                </a>
                <div class="-z-1 peer-hover:w-full w-0 duration-300 h-1 absolute bottom-0 bg-blue-500"></div>
              </li>
              <li class="relative">
                <a
                  onClick={() => scrollToElement("product")}
                  class={`${
                    solid ? " hover:text-blue-500 peer" : "hover:text-black"
                  } cursor-pointer px-2 font-bold tracking-wide`}
                >
                  Produk
                </a>
                <div class="-z-1 peer-hover:w-full w-0 duration-300 h-1 absolute bottom-0 bg-blue-500"></div>
              </li>
              <li class="relative">
                <a
                  onClick={() => scrollToElement("testimonials")}
                  class={`${
                    solid ? " hover:text-blue-500 peer" : "hover:text-black"
                  } cursor-pointer px-2 font-bold tracking-wide`}
                >
                  Testimoni
                </a>
                <div class="-z-1 peer-hover:w-full w-0 duration-300 h-1 absolute bottom-0 bg-blue-500"></div>
              </li>
              <li class="relative">
                <a
                  onClick={() => scrollToElement("contact")}
                  class={`${
                    solid ? " hover:text-blue-500 peer" : "hover:text-black"
                  } cursor-pointer px-2 font-bold tracking-wide`}
                >
                  Kontak
                </a>
                <div class="-z-1 peer-hover:w-full w-0 duration-300 h-1 absolute bottom-0 bg-blue-500"></div>
              </li>
            </ul>
            <div class="relative flex w-12 h-12 justify-end md:hidden">
              <button onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={faBarsStaggered} />
              </button>
              <div
                class={`${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                } duration-300 bg-white pt-1 shadow-[0_2px_2px_#00000015] fixed top-16 right-0 min-w-30 -translate-y-1`}
              >
                <ul>
                  <li>
                    <a
                      onClick={() => scrollToElement("service")}
                      class="text-sm px-2 py-1 flex w-full hover:bg-gray-100"
                    >
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToElement("product")}
                      class="text-sm px-2 py-1 flex w-full hover:bg-gray-100"
                    >
                      Produk
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToElement("testimonials")}
                      class="text-sm px-2 py-1 flex w-full hover:bg-gray-100"
                    >
                      Testimoni
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToElement("contact")}
                      class="text-sm px-2 py-1 flex w-full hover:bg-gray-100"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main class="w-full h-max">
        <section class="relative flex overflow-hidden w-screen bg-blue-800 h-[28rem] md:h-auto md:aspect-2/1">
          <div class="absolute bg-blue-900 w-48 h-48 md:w-128 md:h-128 rounded-full bottom-0 left-0 translate-y-1/3 -translate-x-1/3 md:translate-y-1/2 md:-translate-x-1/2"></div>

          <div class="absolute bg-orange-400 w-72 h-72 md:w-256 md:h-256 rounded-full right-0 translate-x-1/4 md:translate-x-1/3 top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0"></div>

          <div class="absolute w-full h-full bg-white/5 flex items-center px-6 md:px-8">
            <header class="text-center md:text-left mx-auto md:mx-0">
              <h1 class="text-4xl md:text-8xl font-bold font-[arial] text-white">
                Lorem Ipsum
              </h1>
              <h2 class="text-xl md:text-4xl font-bold tracking-wider text-orange-500 md:ml-4 mt-2 md:mt-0">
                Lorem ipsum dolor sit amet
              </h2>
            </header>
          </div>
        </section>

        <section
          id="service"
          class="max-w-[1280px] w-full flex flex-col items-center py-16 px-4"
        >
          <h2 class="text-3xl font-bold">Layanan Kami</h2>
          <div class="mt-8 w-full grid gap-4 grid-cols-1 md:grid-cols-[max-content_max-content] md:grid-rows-[max-content_max-content] justify-center">
            <article class="shadow-md w-80 bg-white rounded-lg py-6 px-10 flex flex-col justify-center gap-4 flex-shrink-0 place-self-center">
              <div class="w-24 h-24 rounded-full bg-gray-300 place-self-center"></div>
              <div class="place-self-center max-w-80 text-center">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
                <p class="text-sm text-gray-700 italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum feugiat velit, quis tempus sapien consequat
                  sed.
                </p>
              </div>
            </article>
            <article class="shadow-md w-80 bg-white rounded-lg py-6 px-10 flex flex-col justify-center gap-4 flex-shrink-0 place-self-center">
              <div class="w-24 h-24 rounded-full bg-gray-300 place-self-center"></div>
              <div class="place-self-center max-w-80 text-center">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
                <p class="text-sm text-gray-700 italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum feugiat velit, quis tempus sapien consequat
                  sed.
                </p>
              </div>
            </article>
            <article class="shadow-md w-80 bg-white rounded-lg py-6 px-10 flex flex-col justify-center gap-4 flex-shrink-0 place-self-center">
              <div class="w-24 h-24 rounded-full bg-gray-300 place-self-center"></div>
              <div class="place-self-center max-w-80 text-center">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
                <p class="text-sm text-gray-700 italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum feugiat velit, quis tempus sapien consequat
                  sed.
                </p>
              </div>
            </article>
            <article class="shadow-md w-80 bg-white rounded-lg py-6 px-10 flex flex-col justify-center gap-4 flex-shrink-0 place-self-center">
              <div class="w-24 h-24 rounded-full bg-gray-300 place-self-center"></div>
              <div class="place-self-center max-w-80 text-center">
                <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
                <p class="text-sm text-gray-700 italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam bibendum feugiat velit, quis tempus sapien consequat
                  sed.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="product" class="bg-black text-white">
          <div class="w-full max-w-[1280px] flex flex-col px-4 py-16 gap-8">
            <h2 class="text-3xl font-bold mx-auto">Produk Terbaik</h2>
            <div class="w-full grid grid-cols-1 md:grid-cols-[19rem_19rem_19rem] gap-4 justify-center">
              <article class="p-6 w-76 gap-4 bg-white flex flex-col rounded-2xl text-black place-self-center">
                <div class="w-64 h-64 rounded-xl bg-gray-300"></div>
                <div class="mb-4">
                  <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
                  <p>
                    <span>Rp</span>
                    <span>00.000</span>
                  </p>
                </div>
              </article>
              <article class="p-6 w-76 gap-4 bg-white flex flex-col rounded-2xl text-black place-self-center">
                <div class="w-64 h-64 rounded-xl bg-gray-300"></div>
                <div class="mb-4">
                  <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
                  <p>
                    <span>Rp</span>
                    <span>00.000</span>
                  </p>
                </div>
              </article>
              <article class="p-6 w-76 gap-4 bg-white flex flex-col rounded-2xl text-black place-self-center">
                <div class="w-64 h-64 rounded-xl bg-gray-300"></div>
                <div class="mb-4">
                  <h3 class="text-xl font-bold">Lorem ipsum dolor sit amet</h3>
                  <p>
                    <span>Rp</span>
                    <span>00.000</span>
                  </p>
                </div>
              </article>
            </div>
            <button class="bg-blue-600 hover:bg-blue-700 px-8 py-3 font-bold rounded-full mx-auto">
              Lebih banyak
            </button>
          </div>
        </section>

        <section
          id="testimonials"
          class="w-full max-w-[1280px] justify-self-center px-4 py-16"
        >
          <h2 class="text-3xl font-bold text-center mb-10">
            Testimoni Pelanggan
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-[20rem_20rem_20rem] gap-6 justify-center">
            <article class="bg-white w-80 shadow-md rounded-xl p-6 grid gap-4 place-self-center">
              <div class="w-20 h-20 rounded-full bg-gray-300 mx-auto"></div>
              <p class="text-center text-gray-700">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
              </p>
              <p class="text-center font-bold">Lorem Ipsum</p>
            </article>
            <article class="bg-white w-80 shadow-md rounded-xl p-6 grid gap-4 place-self-center">
              <div class="w-20 h-20 rounded-full bg-gray-300 mx-auto"></div>
              <p class="text-center text-gray-700">
                “Pellentesque habitant morbi tristique senectus et netus.”
              </p>
              <p class="text-center font-bold">Lorem Ipsum</p>
            </article>
            <article class="bg-white w-80 shadow-md rounded-xl p-6 grid gap-4 place-self-center">
              <div class="w-20 h-20 rounded-full bg-gray-300 mx-auto"></div>
              <p class="text-center text-gray-700">
                “Aenean commodo ligula eget dolor.”
              </p>
              <p class="text-center font-bold">Lorem Ipsum</p>
            </article>
          </div>
        </section>

        <section id="contact" class="w-full bg-white py-20 border-t">
          <div class="max-w-[1280px] justify-self-center px-4 grid grid-cols-1 md:grid-cols-[auto_24rem] gap-10">
            <div>
              <h2 class="text-4xl font-bold">Hubungi Kami</h2>
              <p class="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                quis lorem neque.
              </p>
              <ul class="mt-4 space-y-2 text-gray-700">
                <li>Email: example@mail.com</li>
                <li>WhatsApp: 0812-3456-7890</li>
                <li>Alamat: Jl. Contoh No. 21</li>
              </ul>
            </div>

            <form class="grid gap-4 border-2 p-6 rounded-xl bg-gray-50">
              <label class="grid gap-1">
                <span class="font-semibold">Nama</span>
                <input class="border rounded p-2" />
              </label>
              <label class="grid gap-1">
                <span class="font-semibold">Email</span>
                <input class="border rounded p-2" />
              </label>
              <label class="grid gap-1">
                <span class="font-semibold">Pesan</span>
                <textarea class="border rounded p-2 h-32"></textarea>
              </label>
              <button class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Kirim
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer class="w-full py-6 text-center text-gray-500 border-t">
        © 2025 - Lorem Ipsum Company. All rights reserved.
      </footer>
      {visible && (
        <button
          class="fixed text-2xl bottom-4 right-4 w-16 h-16 bg-blue-500 rounded-full text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
}
