import Image from "next/image";
import { Fragment } from "react";

import {
  ArrowDown,
  ArrowLeftCircle,
  ArrowRightCircle,
  ArrowUpRight,
  Star,
} from "lucide-react";
import Balancer from "react-wrap-balancer";

import { PatternBackground } from "@/components/PatternBackground";
import ServicesCircles from "@/components/ServicesCircles";
import StatCircle from "@/components/StatCircle";
import { Button } from "@/components/ui/button";

import cms from "../../../public/cms.jpg";
import rebar from "../../../public/rebar.jpg";
import PageClient from "./page.client";

export default function Page() {
  return (
    <Fragment>
      <PageClient />
      <div className="flex items-center bg-[url(/bridge.jpg)] bg-cover bg-fixed bg-no-repeat">
        <div className="z-10 my-24 w-full border-b border-t border-dotted border-slate-500">
          <div className="container">
            <h2 className="font-heading text-5xl text-slate-50 underline sm:text-7xl lg:text-8xl lg:leading-[90px] xl:text-[7rem] xl:leading-[110px]">
              <span className="block max-w-[145px] bg-slate-900 sm:w-[215px] sm:max-w-full lg:w-[290px] xl:w-[340px]">
                Digital
              </span>{" "}
              <span className="block max-w-[227px] bg-slate-900 sm:w-[340px] sm:max-w-full lg:w-[450px] xl:w-[530px]">
                Marketing
              </span>{" "}
              <span className="block max-w-[322px] bg-slate-900 sm:w-[480px] sm:max-w-full lg:w-[640px] xl:w-[750px]">
                for Civil Brands
              </span>{" "}
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-dotted border-slate-500">
        <div className="container flex">
          <h2 className="flex h-48 w-1/2 items-center px-16 font-heading text-3xl">
            <Balancer>
              Finally! Digital marketing help is here, fine tuned for AEC brands
              by industry vets.
            </Balancer>
          </h2>
          <div className="flex h-48 w-1/2 items-center space-x-2 px-16">
            <Button className="flex h-12 w-1/2 items-center justify-center space-x-2 rounded-none bg-red-600">
              <p>Book an intro call</p>
              <ArrowUpRight className="h-6 w-6" />
            </Button>
            <Button
              variant={"outline"}
              className="flex h-12 w-1/2 items-center justify-center space-x-2 rounded-none border-2 border-slate-900"
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
      <div className="container flex py-10">
        <div className="z-10 -ml-24 w-4/5">
          <Image
            src={rebar}
            alt="Construction workers observing rebar placement on a large paving area."
            objectFit="cover"
          />
        </div>
        <div className="flex w-1/2 flex-col space-y-6 px-16">
          <h2 className="font-heading text-5xl">
            <Balancer>
              Real talk. Is your digital presence more sleeper than sales
              superstar?
            </Balancer>
          </h2>
          <p className="text-justify">
            You&apos;re not alone. Many architectural, engineering, and
            construction (AEC) companies struggle to generate leads online. We
            help you attract and convert prospects with effective digital
            strategies that grow your business. We combine over 17 years of
            civil industry experience with modern web tech and strategy to
            deliver exceptional results. Partner with us to put your digital
            marketing on autpilot, so you can get back to focusing on your core
            business, building the world&apos;s infrastructure.
          </p>
          <Button
            variant={"outline"}
            className="flex h-12 w-80 items-center justify-center space-x-2 rounded-none border-2 border-slate-900"
          >
            <p>See what we bring to the table</p>
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="py-10">
        <div className="w-full border-b border-dotted border-slate-500">
          <h2 className="container z-10 px-16 pb-6 text-center font-heading text-5xl">
            Specialized Services Tailored to the Civil Market
          </h2>
        </div>
        <ServicesCircles />
      </div>
      <div className="bg-slate-900 pb-36 pt-24 text-slate-50">
        <div className="container flex">
          <div className="z-10 -ml-24 mt-28 w-4/5">
            <Image
              src={cms}
              alt="Content management system interface."
              objectFit="cover"
              className="w-full"
            />
          </div>
          <div className="flex w-1/2 flex-col space-y-4 px-16">
            <div className="mb-14 flex w-full items-center justify-between">
              <p className="uppercase">Features</p>
              <div className="flex space-x-2">
                <ArrowLeftCircle className="h-10 w-10 cursor-pointer" />
                <ArrowRightCircle className="h-10 w-10 cursor-pointer" />
              </div>
            </div>
            <h2 className="font-heading text-7xl">
              Powerful Content Management
            </h2>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium doloremque, totam assumenda modi dolor odio architecto
              voluptatem, reiciendis nisi consectetur magnam amet harum quo,
              sapiente maiores impedit. Laborum deserunt reiciendis error eius
              consequatur, nostrum ab dolor incidunt quam nemo, voluptate
              laudantium, quos voluptates blanditiis eligendi repudiandae
              placeat. Eaque, quibusdam nulla.
            </p>
            <p className="text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium doloremque, totam assumenda modi dolor odio architecto
              voluptatem, reiciendis nisi consectetur magnam amet harum quo,
              sapiente maiores impedit. Laborum deserunt reiciendis error eius
              consequatur, nostrum ab dolor incidunt quam nemo, voluptate
              laudantium, quos voluptates blanditiis eligendi repudiandae
              placeat. Eaque, quibusdam nulla.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[900px] bg-[url(/earthwork.jpg)] bg-cover bg-fixed bg-center bg-no-repeat" />
      <div className="container flex flex-col items-end">
        <div className="h-12 w-1/2 text-slate-900">
          <PatternBackground />
        </div>
        <div className="mr-16 mt-10 flex w-[400px] flex-col space-y-2 px-20 py-20">
          <h2 className="w-20 pb-6 font-heading text-5xl">Recent Projects</h2>
          <p>
            Explore how we&apos;ve successfully enhanced the web presence for
            our civil infrastructure clients.
          </p>
        </div>
      </div>
      <div className="flex h-[1490px] border-b border-t border-dotted border-slate-500">
        <div className="container flex flex-col justify-between">
          <div className="relative z-10 h-full w-full">
            <div className="absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 -translate-y-[315px] bg-slate-400" />
            <div className="absolute -left-[120px] -top-[170px] h-[600px] w-[500px] bg-slate-400" />
            <div className="absolute left-1/2 top-[110px] h-[440px] w-[800px] -translate-x-[80px] bg-slate-400" />
            <div className="absolute left-0 top-[530px] h-[340px] w-[460px] bg-slate-400" />
            <div className="absolute left-1/2 top-[670px] h-[400px] w-[500px] -translate-x-[40px] bg-slate-400" />
            <div className="absolute -left-[60px] top-[994px] h-[300px] w-[580px] bg-slate-400" />
          </div>
          <div className="h-12 w-[480px] text-slate-900">
            <PatternBackground />
          </div>
        </div>
      </div>
      <div className="container relative min-h-[820px]">
        <div className="absolute left-1/2 top-[53px] h-[679px] w-[660px] -translate-x-[120px] bg-slate-400" />
        <div className="flex w-[530px] flex-col px-16 py-24">
          <div className="flex items-center space-x-6">
            <button className="h-16 w-16 rounded-full outline outline-[3px] outline-slate-900" />
            <button className="h-16 w-16 rounded-full outline outline-[3px] outline-slate-900" />
            <button className="h-16 w-16 rounded-full outline outline-[3px] outline-slate-900" />
            <button className="h-16 w-16 rounded-full outline outline-[3px] outline-slate-900" />
          </div>
          <h2 className="pb-6 pt-16 font-heading text-5xl">
            <Balancer>Meet the Experts Behind Your Digital Success</Balancer>
          </h2>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            doloremque, totam assumenda modi dolor odio architecto voluptatem,
            reiciendis nisi consectetur magnam amet harum quo, sapiente maiores
            impedit. Laborum deserunt reiciendis error eius consequatur, nostrum
            ab dolor incidunt quam nemo, voluptate laudantium, quos voluptates
            blanditiis eligendi repudiandae placeat. Eaque, quibusdam nulla.
          </p>
        </div>
      </div>
      <div className="w-full bg-slate-100 pb-44 pt-24">
        <div className="container flex">
          <div className="flex w-1/2 flex-col items-center justify-center space-y-6 px-24">
            <div className="h-[100px] w-[100px] rounded-full bg-slate-400" />
            <div className="flex flex-row space-x-1">
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
            </div>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium doloremque, totam assumenda modi dolor odio architecto
              voluptatem, reiciendis nisi consectetur magnam amet harum quo,
              sapiente maiores impedit. Laborum deserunt reiciendis error eius
              consequatur, nostrum ab dolor incidunt quam nemo, voluptate
              laudantium, quos voluptates blanditiis eligendi repudiandae
              placeat. Eaque, quibusdam nulla.
            </p>
            <p className="text-center font-bold">
              Firstname, CEO - Company Name
            </p>
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center space-y-6 px-24">
            <div className="h-[100px] w-[100px] rounded-full bg-slate-400" />
            <div className="flex flex-row space-x-1">
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
              <Star className="h-4 w-4" fill="currentColor" />
            </div>
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium doloremque, totam assumenda modi dolor odio architecto
              voluptatem, reiciendis nisi consectetur magnam amet harum quo,
              sapiente maiores impedit. Laborum deserunt reiciendis error eius
              consequatur, nostrum ab dolor incidunt quam nemo, voluptate
              laudantium, quos voluptates blanditiis eligendi repudiandae
              placeat. Eaque, quibusdam nulla.
            </p>
            <p className="text-center font-bold">
              Firstname, CEO - Company Name
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-36 mt-24 h-[1016px] bg-[url(/skyscraper.jpg)] bg-cover bg-fixed bg-no-repeat">
        <StatCircle
          stat={"100"}
          description={
            "Average page experience score, a crucial metric in search engine ranking"
          }
          className="absolute -top-[140px] left-[141px]"
        />
        <StatCircle
          stat={"26%"}
          description={
            "Average increase in client engagement after website launch"
          }
          className="absolute left-1/2 top-[262px] translate-x-[146px]"
        />
        <StatCircle
          stat={"18%"}
          description={
            "Average increase in conversation rate (visitor to customer)"
          }
          className="absolute left-[253px] top-[762px]"
        />
      </div>
      <div className="w-full border-b border-t border-dotted border-slate-400">
        <div className="container">
          <div className="flex h-full flex-col items-center space-y-6 bg-red-600 py-72">
            <h2 className="z-10 max-w-[700px] text-center font-heading text-7xl text-slate-50">
              <Balancer>Ready to Elevate Your Online Presence?</Balancer>
            </h2>
            <p className="z-10 max-w-[700px] text-center text-slate-50">
              Join the ranks of civil industry professionals who have
              transformed their web presence and boosted their sales with Civil
              Brand Works. Let&apos;s Build Your Digital Future.
            </p>
            <Button className="z-10 flex h-12 w-56 items-center justify-center space-x-2 rounded-none bg-slate-900">
              <p>Book an intro call</p>
              <ArrowUpRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
