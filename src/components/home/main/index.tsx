import React from 'react';
import { Home, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'

function Main(){
  return (
    <div className='h-screen flex flex-col'>
        <div className='flex flex-1'>
            {/*Side bar*/}
            <aside className='w-72 bg-zinc-950 p-6'>
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-red-500 rounded-full'/>
                    <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
                    <div className='w-3 h-3 bg-green-500 rounded-full'/>
                </div>

                <nav className='space-y-5 mt-10'>
                    <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                        <Home />
                        Home
                    </a>
                    <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                        <Search />
                        Search
                    </a>
                    <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                        <Library />
                        Your Library
                    </a>
                </nav>
                
                <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Chill Vibes</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Workout Beats</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Classic Hits</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Evening Jazz</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Indie Mix</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Pop Essentials</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Focus Flow</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Summer Tunes</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Acoustic Mornings</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Rock Anthems</a>
                <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Night Drive</a>


                </nav>
            </aside>

            {/*Corpo*/}
            <main className='flex-1 p-6'>
                <div className='flex items-center gap-3'>
                    <button className='w-6 h-6 rounded-full bg-black/20'>
                        <ChevronLeft />
                    </button>
                    <button>
                        <ChevronRight />
                    </button>
                </div>
            </main>
        </div>

        {/*Rodapé*/}
        <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
            footer
        </footer>
    </div>
  );
};

export default Main;