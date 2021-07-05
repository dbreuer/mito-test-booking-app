import React from 'react'

export default function Placeholder() {
  return (
    <>
    <style jsx>{`
     .activity {
        width: 80%;
        height: 30px;
        margin: 0 20px;
        background: rgb(227,227,227);
        background: linear-gradient(90deg, rgba(227,227,227,1) 0%, rgba(182,182,182,1) 7%, rgba(182,182,182,1) 13%, rgba(227,227,227,1) 25%);
        background-size:900%;
        background-position: 100% 0%;
        animation: animation 1.8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }

      @keyframes animation {
        0% {
          background-position: 100% 0%;
        }
        99.99% {
          background-position: -30% 0%;
        }
        100% {
          background-position: 100% 0%;
        }
      }
    `}</style>
    <div className="activity"></div>
    </>
  )
}
