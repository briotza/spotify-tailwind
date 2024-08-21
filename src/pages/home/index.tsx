import React from 'react';
import { Home, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react'
import Album from '../../../src/assets/parachutes.jpg'
import { Sidebar } from '../../components/Sidebar';
import { Footer } from '../../components/Footer';

function Main(){
  return (
    <div className='h-screen flex flex-col'>
        <div className='flex flex-1'>
            {/*Side bar*/}
            <Sidebar />

            {/*Corpo*/}
            <main className='flex-1 p-6'>
                <div className='flex items-center gap-3'>
                    <button className='rounded-full bg-black/40 p-1'>
                        <ChevronLeft />
                    </button>
                    <button className='rounded-full bg-black/40 p-1'>
                        <ChevronRight />
                    </button>
                </div>

                <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                        <img src={Album} width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong>Parachutes</strong>
                        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                            <Play />
                        </button>
                    </a>
                    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                        <img src={Album} width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong>Parachutes</strong>
                        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                            <Play />
                        </button>
                    </a>
                    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                        <img src={Album} width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong>Parachutes</strong>
                        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                            <Play />
                        </button>
                    </a>
                    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                        <img src={Album} width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong>Parachutes</strong>
                        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                            <Play />
                        </button>
                    </a>
                    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                        <img src={Album} width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong>Parachutes</strong>
                        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                            <Play />
                        </button>
                    </a>
                    <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
                        <img src={Album} width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong>Parachutes</strong>
                        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                            <Play />
                        </button>
                    </a>
                </div>

                <h2 className='font-semibold text-2xl mt-10'>Made for Ciano Meliunas</h2>

                <div className='grid grid-cols-5 gap-4 mt-4'>
                    <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
                        <img src={Album} className='w-full' width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong className='font-semibold'>Daily Mix 1</strong>
                        <span className='text-sm text-zinc-400'>Wallows, COIN, Girl inred and more</span>
                    </a>
                    <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
                        <img src={Album} className='w-full' width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong className='font-semibold'>Daily Mix 2</strong>
                        <span className='text-sm text-zinc-400'>Wallows, COIN, Girl inred and more</span>
                    </a>
                    <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
                        <img src={Album} className='w-full' width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong className='font-semibold'>Daily Mix 3</strong>
                        <span className='text-sm text-zinc-400'>Wallows, COIN, Girl inred and more</span>
                    
                    </a>
                    <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
                        <img src={Album} className='w-full' width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong className='font-semibold'>Daily Mix 4</strong>
                        <span className='text-sm text-zinc-400'>Wallows, COIN, Girl inred and more</span>
                    
                    </a>
                    <a href='' className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
                        <img src={Album} className='w-full' width={104} height={104} alt='Capa do album Parachutes da banda Coldplay'/>
                        <strong className='font-semibold'>Daily Mix 5</strong>
                        <span className='text-sm text-zinc-400'>Wallows, COIN, Girl inred and more</span>
                    
                    </a>
                </div>

            </main>
        </div>

        {/*Rodapé*/}
        <Footer />
    </div>
  );
};

export default Main;