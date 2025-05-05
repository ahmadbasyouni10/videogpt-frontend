import {
  CloudIcon,
  ZapIcon,
  File,
  MessageCircleIcon,
  CompassIcon,
  LayersIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Secure Video Storage",
    description: "Upload and store your videos safely in the cloud, accessible anytime from any device.",
    icon: CloudIcon,
  },
  {
    name: "Instant Video Summaries",
    description: "Get powerful, AI-generated summaries of any video in seconds — perfect for fast comprehension.",
    icon: ZapIcon,
  },
  {
    name: "Smart Transcripts",
    description: "Auto-generate accurate, timestamped transcripts from your videos with a single click.",
    icon: File,
  },
  {
    name: "Ask Your Video",
    description: "Ask questions about the video and get precise, cited answers with clickable timestamps.",
    icon: MessageCircleIcon,
  },
  {
    name: "Interactive Video Navigator",
    description: "Click through key moments and topics using an intuitive AI timeline linked to the transcript.",
    icon: CompassIcon,
  },
  {
    name: "Multi-Format Support",
    description: "Works with lectures, podcasts, meetings, and screen recordings — optimized for every use case.",
    icon: LayersIcon,
  },
]
export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-700">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Your AI Video Assistant</h2> 
            
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform your Videos into Interactive AI Experiences</p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with Videos.</span>
              <br />
              Upload your video and get summaries, chat about the video, and answer all your Qs. Ideal for everyone especially those looking to skip lectures 😂{"\n"}
              <span className="text-indigo-600">Chat with Videos</span>{" "}
              turns videos into{" "}
              <span className="font-bold">dynamic conversations</span>, enhancing productivity 10× fold effortlessly.
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>

          </div>

          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6">
              <Image
              alt="System Diagram"
              src="/systemDiagram.svg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
              </div>
            </div>

          </div>

          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map(feature => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon 
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                    />
                  </dt>
                  <dd>{feature.description}</dd>
                </div>
              ))}

            </dl>


          </div>


      </div>
    </main>
  );
}

