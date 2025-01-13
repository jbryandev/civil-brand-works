import Image from "next/image";
import { Fragment } from "react";

import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import Balancer from "react-wrap-balancer";

import { PatternBackground } from "@/components/PatternBackground";
import { Button } from "@/components/ui/button";

import rebar from "../../../public/rebar.jpg";
import PageClient from "./page.client";

export default function Page() {
  return (
    <Fragment>
      <PageClient />
      <div className="flex h-[550px] items-center bg-[url(/bridge.jpg)] bg-contain bg-fixed bg-no-repeat">
        <div className="w-full border-b border-t border-dotted border-slate-500">
          <div className="container">
            <h2 className="font-heading text-[7rem] leading-[100px] text-slate-50 underline">
              <span className="block w-[340px] bg-slate-900">Digital</span>{" "}
              <span className="block w-[530px] bg-slate-900">Marketing</span>{" "}
              <span className="block w-[750px] bg-slate-900">
                for Civil Brands
              </span>{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-t border-dotted border-slate-500">
        <div className="container flex">
          <h2 className="font-heading flex h-48 w-1/2 items-center px-20 text-3xl">
            <Balancer>
              Innovative online strategies tailored to the AEC sector
            </Balancer>
          </h2>
          <div className="flex h-48 w-1/2 flex-grow items-center space-x-2 px-20">
            <Button className="flex h-12 w-48 items-center justify-center space-x-2 rounded-none bg-red-600">
              <p>Book an intro call</p>
              <ArrowUpRight className="h-6 w-6" />
            </Button>
            <Button
              variant={"outline"}
              className="flex h-12 w-48 items-center justify-center space-x-2 rounded-none border-2 border-slate-900"
            >
              <p>Learn More</p>
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      <div className="container flex justify-end">
        <div className="h-12 w-1/2 text-slate-900">
          <PatternBackground />
        </div>
      </div>
      <div className="container flex py-16">
        <div className="flex w-1/2 space-x-2 px-10">
          <div className="flex flex-col items-center space-y-3">
            <div className="flex flex-row space-x-1">
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
            </div>
            <Balancer className="text-center">
              Exceptional web revamp, highly recommend!
            </Balancer>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex flex-row space-x-1">
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
            </div>
            <Balancer className="text-center">
              Outstanding SEO results, unmatched expertise!
            </Balancer>
          </div>
        </div>
        <div className="flex w-1/2 space-x-2 px-10">
          <div className="flex flex-col items-center space-y-3">
            <div className="flex flex-row space-x-1">
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
            </div>
            <Balancer className="text-center">
              Their website design truly distinguishes us.
            </Balancer>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex flex-row space-x-1">
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
            </div>
            <Balancer className="text-center">
              Seamless process, professional and knowledgeable!
            </Balancer>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-3/5">
          <Image
            src={rebar}
            alt="Construction workers observing rebar placement on a large paving area."
            objectFit="cover"
            className="w-full"
          />
        </div>
        <div className="flex w-[450px] flex-col space-y-10 px-8 pt-20">
          <h2 className="font-heading text-5xl">
            <Balancer>Is your website a sleeper or a sales superstar?</Balancer>
          </h2>
          <Balancer>
            If it is an afterthought, you&apos;re not alone. Many AEC companies
            struggle to make the most of their websites. Every day, thousands of
            potential customers search for solutions online. Let us transform
            your website into a powerful tool that attracts and converts these
            prospects.
          </Balancer>
        </div>
      </div>
    </Fragment>
  );
}
