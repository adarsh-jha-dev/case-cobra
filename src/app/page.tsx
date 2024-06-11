import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className=" col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center flex-col flex lg:text-left items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <img src="/snake-1.png" className="w-full" alt="snake" />
              </div>
              <h1 className=" relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-green-600 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose lg:text-left text-center text-balance md:text-wrap">
                Capture your favorite memories with your own{" "}
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone.
              </p>
              <ul className="mt-8 space-y-2 flex flex-col items-center sm:items-start font-medium text-left">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check
                      className="h-5 w-5 shrink -0 text-green-600 "
                      size={20}
                    />
                    High Quality, Durable material.
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check
                      className="h-5 w-5 shrink -0 text-green-600 "
                      size={20}
                    />
                    5 Year Guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check
                      className="h-5 w-5 shrink -0 text-green-600 "
                      size={20}
                    />
                    Modern IPhone models supported
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-slate-100 ring-2"
                    src="/users/user-1.png"
                    alt="user-image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-slate-100 ring-2"
                    src="/users/user-2.png"
                    alt="user-image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-slate-100 ring-2"
                    src="/users/user-3.png"
                    alt="user-image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-slate-100 ring-2"
                    src="/users/user-4.jpg"
                    alt="user-image"
                  />
                  <img
                    className="inline-block object-cover h-10 w-10 rounded-full ring-slate-100 ring-2"
                    src="/users/user-5.jpg"
                    alt="user-image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  <Star className="h-4 w-4 text-green-600 fill-green-600" />
                </div>
                <p className="">
                  <span className="font-semibold">1250</span> Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className=" col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md;px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:mx-w-xl ">
              <img
                src="/your-image.png"
                className="absolute w-40 lg:w-52 left-56 -top-20 select-none lg:hidden sm:block xl:block"
                alt="phone-case"
              />
              <img
                src="/line.png"
                className="absolute w-20 -left-6 -bottom-6 select-none"
                alt="phone-case"
              />
              <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* value proposition section */}
      <section className="py-24 bg-slate-200">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 ">
              What our{" "}
              <span className="relative px-2">
                Customers
                <Icons.underline className="hidden sm:block pointer-events-none absolute -bottom-6 text-green-500 inset-x-0" />
              </span>{" "}
              say
            </h2>
            <img src="/snake-2.png" className="w-24 order-0 lg:order-2" />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:max-w-none lg:mx-0 lg:grid-cols-2 ">
            <div className="flex flex-auto flex-col xl:pr-20 lg:pr-8 gap-4">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "The case feels durable and I even got a compliment on the
                  design. Had the case for two and a half months now and{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    the image is super clear
                  </span>
                  , on the case I had before, the image started fading into
                  yellow-ish color after a couple weeks. Love it."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-1.png"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verfied Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col xl:pr-20 lg:pr-8 gap-4">
              <div className="flex gap-0.5 mb-2">
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
                <Star className="h-5 w-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  "I usually keep my phone together with my keys in my pocket
                  and that led to some pretty heavy scratchmarks on all of my
                  last phone cases. This one, besides a barely noticeable
                  scratch on the corner,{" "}
                  <span className="p-0.5 bg-slate-800 text-white">
                    looks brand new after about half a year
                  </span>
                  . I dig it."
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="/users/user-4.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Adarsh</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verfied Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
          <Reviews />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900 ">
                Upload Your Photo and Get{" "}
                <span className="relative bg-green-600 text-white px-2">
                  Your Own Case
                </span>{" "}
                now
              </h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 -translate-x-1/2 rotate-90 md:rotate-0 left-1/2"
                alt="arrow"
              />
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/5 lg:rounded-2xl ">
                <img
                  src="/horse.jpg"
                  alt="horse"
                  className="rounded-md shadow-2xl bg-white object-cover ring-1 ring-gray-900/10 h-full w-full"
                />
              </div>
              <Phone imgSrc="/horse_phone.jpg" className="w-60" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 mr-1.5 inline" />
              High Quality Silicon Material
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 mr-1.5 inline" />
              Scratch and Fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 mr-1.5 inline" />
              Wireless Charging Compatible
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-600 mr-1.5 inline" />5 Year
              print warranty
            </li>
            <div className="flex justify-center">
              <Link
                href={"/configure/upload"}
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
              >
                Create Your case now
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
