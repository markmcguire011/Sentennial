import React from 'react';

function  DiscoverButton({}){
    
}

function MockArticle({ numLines } : { numLines: number }){
    const lines = []

    for (let i = 0; i < numLines; i++){
        lines.push(
            <div key={"lines_" + i.toString()} className="bg-slate-400 rounded h-[10px] w-full"></div>
        );
    }

    return (
        <div className="flex flex-col gap-3 h-40 rounded-md shadow-md border border-brand-color p-[30px] items center">
            <div className="bg-slate-500 rounded h-[10px] w-full"></div>
            { lines }
        </div>
    );
}

export default MockArticle;