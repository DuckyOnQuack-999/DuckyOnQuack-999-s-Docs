"use client";

import { Github, Download, Code2, Terminal, Settings2, Shield, Cpu, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        <div className="relative isolate">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 pb-2">
                DuckyOnQuack's Docs
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                A collection of powerful tools for Windows customization, PowerShell automation, and development environment optimization.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                  <Link href="/docs">
                    <Code2 className="mr-2 h-4 w-4" />
                    View Documentation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/DuckyOnQuack-999" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings2 className="h-5 w-5 text-purple-500" />
                    Win11 Customizer Suite
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive toolkit for Windows 11 customization and system optimization.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/DuckyOnQuack-999/Win11-Customizer-Suite" target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-indigo-500" />
                    WinKit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Essential toolkit for Windows system maintenance and optimization.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/DuckyOnQuack-999/WinKit" target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-pink-500" />
                    PowerShell Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Enhanced PowerShell profile with custom functions and productivity tools.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/DuckyOnQuack-999/powershell-profile" target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 flex flex-col justify-center">
                      <h2 className="text-2xl font-bold mb-4">Featured Tools</h2>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-purple-500" />
                          <span>Advanced system optimization tools</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Terminal className="h-5 w-5 text-indigo-500" />
                          <span>PowerShell automation scripts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Cpu className="h-5 w-5 text-pink-500" />
                          <span>Development environment setup</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        <li>• Windows 11 optimization tools</li>
                        <li>• PowerShell automation scripts</li>
                        <li>• Development environment setup</li>
                        <li>• System maintenance utilities</li>
                        <li>• Custom terminal configurations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}