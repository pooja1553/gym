import React from 'react';
import './Page.css'

function Page(props) {
  return (
    <>
    <div className='Page'>

    <div className="page">
        <div className="page1"><h4>{props.a1}</h4></div>
        <div className="page1"><h4>{props.a2}</h4></div>
        <div className="page1"><h4>{props.a3}</h4></div>
        <div className="page1"><h4>{props.a4}</h4></div>
        <div className="page1"><h4>{props.a5}</h4></div>
        <div className="page1"><h4>{props.a6}</h4></div>
        <div className="page1"><h4>{props.a7}</h4></div>
        <div className="page1"><h4>{props.a8}</h4></div>
    </div>
    <div className="page2">
        <div className="page-1 page3 page-org"><h5>{props.b1}</h5><span>{props.c1}</span></div>
        <div className="ph page-2 page3"><h5>{props.b2}</h5><span>{props.c2}</span></div>
        <div className="ph page-3 page3"><h5>{props.b3}</h5><span>{props.c3}</span></div>
        <div className="ph page-2 page3"><h5>{props.b4}</h5><span>{props.c4}</span></div>
        <div className="ph page-3 page3"><h5>{props.b5}</h5><span>{props.c5}</span></div>
        <div className="ph page-2 page3"><h5>{props.b6}</h5><span>{props.c6}</span></div>
        <div className="ph page-3 page3"><h5>{props.b7}</h5><span>{props.c7}</span></div>
        <div className="ph page-2 page3"><h5>{props.b8}</h5><span>{props.c8}</span></div>
    </div>
    <div className="page2">
        <div className="page-1 page3 page-org"><h5>{props.d1}</h5><span>{props.e1}</span></div>
        <div className="ph page-3 page3"><h5>{props.d2}</h5><span>{props.e2}</span></div>
        <div className="ph page-2 page3"><h5>{props.d3}</h5><span>{props.e3}</span></div>
        <div className="ph page-3 page3"><h5>{props.d4}</h5><span>{props.e4}</span></div>
        <div className="ph page-2 page3"><h5>{props.d5}</h5><span>{props.e5}</span></div>
        <div className="ph page-3 page3"><h5>{props.d6}</h5><span>{props.e6}</span></div>
        <div className="ph page-2 page3"><h5>{props.d7}</h5><span>{props.e7}</span></div>
        <div className="ph page-3 page3"><h5>{props.d8}</h5><span>{props.e8}</span></div>
    </div>
    <div className="page2">
        <div className="page-1 page3 page-org"><h5>{props.f1}</h5><span>{props.g1}</span></div>
        <div className="ph page-2 page3"><h5>{props.f2}</h5><span>{props.g2}</span></div>
        <div className="ph page-3 page3"><h5>{props.f3}</h5><span>{props.g3}</span></div>
        <div className="ph page-2 page3"><h5>{props.f4}</h5><span>{props.g4}</span></div>
        <div className="ph page-3 page3"><h5>{props.f5}</h5><span>{props.g5}</span></div>
        <div className="ph page-2 page3"><h5>{props.f6}</h5><span>{props.g6}</span></div>
        <div className="ph page-3 page3"><h5>{props.f7}</h5><span>{props.g7}</span></div>
        <div className="ph page-2 page3"><h5>{props.f8}</h5><span>{props.g8}</span></div>
    </div>
    <div className="page2">
        <div className="page-1 page3 page-org"><h5>{props.h1}</h5><span>{props.i1}</span></div>
        <div className="ph page-3 page3"><h5>{props.h2}</h5><span>{props.i2}</span></div>
        <div className="ph page-2 page3"><h5>{props.h3}</h5><span>{props.i3}</span></div>
        <div className="ph page-3 page3"><h5>{props.h4}</h5><span>{props.i4}</span></div>
        <div className="ph page-2 page3"><h5>{props.h5}</h5><span>{props.i5}</span></div>
        <div className="ph page-3 page3"><h5>{props.h6}</h5><span>{props.i6}</span></div>
        <div className="ph page-2 page3"><h5>{props.h7}</h5><span>{props.i7}</span></div>
        <div className="ph page-3 page3"><h5>{props.h8}</h5><span>{props.i8}</span></div>
    </div>
   
    </div>
    </>
  )
}

export default Page