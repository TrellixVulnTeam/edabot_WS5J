import React, { Component } from 'react';
import styled from 'styled-components';
import Vivus from 'vivus'

const HeaderImage = styled.div`
  grid-row: 2;
  width: 80%;
  margin: 5em auto;
  max-width: 500px;
`

class Header extends Component {
  componentDidMount() {
    new Vivus('edlewis', { duration: 300, delay: 120 });
  }

  render() {
    return (
      <div>
        <HeaderImage>
        <svg id="edlewis" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 615.65 103.03">
           <g id="Layer_1" data-name="Layer 1" fill="none" stroke="black">
             <path className="cls-1" d="M58.66,254.7s6.56-3.26,6.64-3.1" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M37.83,244.27C39.09,247,85.15,222.2,85.15,222.2c3,6.48-33.43,25.06-33.43,25.06s35.86-22.72,38.16-17.79c1.78,3.82-29,16.16-28.34,17.51,0,0,29.11-15.88,30-14,0,0-12.31,12.4-12.26,12.52.25.54,11.52-5.37,11.52-5.37.22.48-3.3,5.08-3.22,5.24s1.6-.81,1.62-.76" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M43.13,219C44.25,221.4,75,204.15,75,204.15L55.57,220.33C56,221.18,80,209,80,209c.91,2-19.9,10.09-18.86,12.31,0,0,19-8.85,19-8.85,1.35,2.89-20.32,10.89-19.09,13.52,0,0,22-10.95,22.27-10.39C84,217.17,61,230.91,61.58,232.21c.82,1.76,24.55-13.87,25.48-11.88" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M26.15,206.41c.45,1,4.63-2.48,4.75-2.22.63,1.36-14.43,11.51-14.43,11.51,1.91,4.1,32.2-19.59,34-15.83C52,203.17,3,225.21,7,233.89,8.35,236.73,61.3,194.16,66.82,206c2,4.2-57.3,40.19-57.3,40.19,1.93,4.13,27.59-18.33,29.69-13.84.65,1.41-28.27,20.67-27.11,23.15s44.59-29.09,47.77-22.27C60.76,235.16,10.59,260,10.59,260l28.05-13.08c.34.73-26.95,13.64-24.56,18.78,0,0,21.62-13.49,22.92-10.69L25.74,268.08c2,4.19,12.87-10.85,14.73-6.86,0,0-7.46,14.1-6.91,15.28,1.56,3.35,39.06-24.77,41.57-19.38,1.56,3.35-13.33,16.47-12.62,18,0,0,17.08-8.37,17.23-8" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M150,264.19C151.78,268,177.87,250,178.34,251c2.09,4.49-27.27,13.94-26.23,16.16,1.14,2.45,24-11.19,24-11.19l-9.56,16.24c.23.49,4.87-5.2,6-2.79.1.2.56,4.14.81,4.68l2.92-1.36" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M138.08,220.48c3.72,8,34.22-20.29,35.88-16.73,0,0-33.18,22.72-31.13,27.13,2.44,5.24,33.1-18.8,34.39-16,3,6.35-27.44,22.93-27.11,23.65,1,2.17,28.07-15.94,29.16-13.6l-32.36,27.28c2.09,4.49,32.25-18.21,33.47-15.61" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M111.46,206.61s9.33-5.33,9.71-4.53c.88,1.9-23.53,16.14-21.57,20.33l42-19.59c3.83,8.19-47.12,27-45.11,31.27,2.9,6.23,52.65-24.55,52.65-24.55S101.38,239.25,103,242.78c.39.83,26.42-12.32,26.42-12.32.87,1.88-30.77,16.92-30,18.66,1.52,3.25,21.37-15.79,23.6-11,1.9,4.08-23.76,22-22.89,23.86,0,0,28.4-17.19,29.91-14,0,0-26.12,19.82-25.4,21.35,0,0,30.36-15.46,30.86-14.39,1.24,2.67-21,16-21,16,1,2.2,56.81-40.62,62.22-29,4.43,9.49-51.72,24.92-48.52,31.8,1.84,3.92,47.46-28.74,50-23.31,2.19,4.7-45.72,16.85-42.27,24.25,0,0,3.06-1.51,3.09-1.44" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M148.91,176.66s.55-.39.6-.28c.52,1.13,1.16,5.81,1.76,7.1.49,1.05,18.07-9.69,18.55-8.65,1.38,3-18.53,14.06-17,17.38,2.16,4.63,21.8-10.17,21.8-10.17,2,4.32-32.58,17.05-29.63,23.38,0,0,33.56-16.6,33.92-15.82.55,1.18-29.94,17.39-28.77,19.89,1.27,2.73,29.24-13.63,29.24-13.63" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M241,175.85c.05.11.46-.24.47-.22.2.44,2.08,3.64,2.18,3.84,0,0,8.46-5.49,9.05-4.22.25.54-12.14,15.7-12.14,15.7.15.32,26.11-12.17,26.11-12.17.75,1.61-27.51,19.71-26.34,22.23l23.52-11c1.41,3-20.05,17.78-20.05,17.78,1.39,3,19.09-15.12,21.47-10,1.47,3.17-28.91,18.71-28.58,19.42,0,0,28-15.17,28.84-13.45,0,0-27,17.22-26.31,18.71,0,0,29-17.29,30.45-14.2,0,0-34.35,20.11-32.39,24.3,0,0,30.35-19.59,32.43-15.12,2.59,5.56-31.54,21.41-28.67,27.56.47,1,20.5-10.95,21-9.81s-23,17.19-23,17.19c2.17,4.66,24-17.3,26.31-12.27.69,1.47-23.45,15.07-22.89,16.27,1.5,3.21,24.49-13.55,25.31-11.8,2,4.19-29.66,20-28.5,22.52,1.66,3.55,24.73-16.15,26.5-12.35,1.24,2.66-25.86,15.48-25.86,15.48s22.58-16.86,25-11.66c1.91,4.09-26.29,17.38-26.29,17.38.45,1,23.86-13.63,24.82-11.57.32.67,2.34,9.33,2.51,9.69,0,.06.59-.28.59-.28" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M333.87,253.82c0,.1.87-.4.87-.4" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M307.84,245.82c3.64,7.8,55-26.09,55.18-25.73,4.26,9.12-50.15,17.41-46.54,25.16.46,1,41.88-19.53,41.88-19.53,2.18,4.68-21.14,17.69-19.25,21.75.57,1.22,23-14.22,24.31-11.34,0,0-6.26,8.33-5.62,9.7l1.86-.86" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M322.2,216.33s21-11.43,21.6-10.07l-7.43,15.61c1.05,2.26,16.36-9,16.87-7.87,1.51,3.24-16.74,17.47-16.74,17.47,1.22,2.6,20.2-11.31,20.92-9.76" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M296.16,208s12.29-6.59,12.62-5.88c1.5,3.23-27.41,22.58-27.41,22.58,4.12,8.82,44.83-30.92,48.66-22.69,3.06,6.55-50.87,34.94-50.87,34.94,2.32,5,30.15-14.06,30.15-14.06,1.25,2.7-27.93,23.55-26.69,26.21.46,1,31.3-14.6,31.3-14.6L280.35,257c.43.92,56.92-26.54,56.92-26.54.94,2-55.25,30.67-54.88,31.47.73,1.56,26.51-14.57,27.35-12.75.61,1.29-25.07,12-22.8,16.86.26.55,20.49-11.07,21.06-9.82,0,0-14.8,12.05-13.68,14.45.16.34,21.24-12.79,22.34-10.42.51,1.1-8.84,14.7-8.84,14.7,3.76,8,36.42-24.64,39.35-18.35,0,0-23.71,13.11-21.91,17,1.05,2.25,33.89-15.8,33.89-15.8.4.84-16,10.89-14.67,13.76.25.53.63-.35.66-.31" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M467.05,205l8-3.74s-12.71,18-12.52,18.39l29-13.55c.84,1.79-24.61,16.92-23.44,19.43L488.51,216l-24.72,15.39c1.52,3.27,23.94-11.16,23.94-11.16L459,247c.05.11,25.54-11.91,25.54-11.91" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M433.09,230.93l17.2-8c.77,1.65-16.69,16.44-16.1,17.71.4.86,15.46-8.35,15.9-7.41.26.56-13.26,10.81-12.08,13.35,0,0,19-13.2,20.63-9.62s-17.08,18.4-16.2,20.28c.23.51,36.52-19.66,37.53-17.51l-36.5,22.72,33.89-15.8C479.79,251.84,445,262,446.42,265c0,0,30-18,31.51-14.7,0,0-32.08,19.11-31.48,20.39,0,0,32.47-20,34.33-16,1.67,3.58-22.75,13.56-20.86,17.62.46,1,15.67-10.19,16.77-7.82l-7.27,9.65s.65-.46.71-.34" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M419,203.63l.69-.33c.61,1.3-1,7.43-.61,8.14,1.25,2.69,13.89-10.89,15.58-7.26.05.11-23.13,17.73-23.13,17.73.62,1.32,32.58-19.18,34.11-15.91,1.4,3-33.4,26.12-33.4,26.12s28.49-21.21,31.52-14.7c0,0-35.53,25-35.27,25.54,0,0,24.64-12.29,25-11.63" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M367.21,203.54s.49-.27.51-.24-1.72,5.38-1.37,6.15c0,0,12.36-5.93,12.42-5.79L375,211.57c.88,1.91,16.27-8,16.45-7.67.07.15-14.41,14.57-14.21,15,.9,1.92,22.28-10.39,22.28-10.39s-18.78,20-18.32,21c0,0,14.75-8.79,15.48-7.22.92,2-16.32,8.85-15.4,10.81l14.2-6.62c1.58,3.38-12.61,15.76-11.32,18.52.48,1,17.69-9.68,18.24-8.5,0,0-13.21,17.74-12.35,19.59,1.31,2.8,33.86-18.86,35-16.34,1.67,3.57-33,19.87-33,19.87s30.6-18.77,32.33-15.07c.55,1.17-34.4,21.26-34.4,21.26s34.44-21.51,36.53-17c0,0-30.16,22.16-28.35,26,0,0,22.71-13.15,23.69-11.05.63,1.36-13.08,11.41-12.85,11.9.46,1,12.53-6.06,12.61-5.88" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M502.27,204.86s.93-.54,1-.46c.43.93-2.2,13.62-1.93,14.18,1.86,4,29.28-13.65,29.28-13.65,2.51,5.38-24.13,20.65-23,23.12,1.07,2.3,20.74-12.19,21.71-10.12.21.45-29.7,19.77-27.37,24.77.11.25,29.56-16.77,30.71-14.32L508.6,250.65c2.31,4.95,18.52-14.49,20.76-9.69,0,0-24.31,14.09-22.66,17.61,0,0,26.36-18.11,28.59-13.33,0,0-27.81,19.89-27.8,19.91s25.43-13.34,26-12.12c0,.09-30.29,19.23-30.29,19.23.92,2,28.95-13.5,28.95-13.5s-12.88,16.32-12.84,16.42,16-9,16.59-7.74c.1.21-4.56,6.22-4.36,6.66,0,0,.59-.29.6-.28" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M506.67,175.85s1.24-.71,1.29-.6c.93,2-3.69,11.49-3.24,12.45,0,0,23.13-13.06,24-11.2,1.52,3.26-16.24,15.34-14.76,18.52,1.07,2.28,22.13-10.32,22.13-10.32l-6.72,11.09a22.78,22.78,0,0,0,2.6-1.22" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M545.37,254.43a32.48,32.48,0,0,0,3.16-1.48s2.58,9.86,3.43,11.68c.49,1,20.58-14.11,22.31-10.4,2.4,5.13-26.77,12.22-25.37,15.21,1.8,3.87,20.37-12.07,21.36-10,0,0-15.52,9.63-14.15,12.56,0,0,23.89-15,25.37-11.83.65,1.4-21.64,12.28-20.6,14.51,0,0,60.44-28.5,60.56-28.24,0,0-37.88,21.26-35,27.44l29.22-13.62c1.49,3.19-17.34,14.62-17.34,14.62.45.95,6.32-3.75,6.63-3.09" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M572.93,218.3,601.49,205c.93,2-14.38,17.63-14.38,17.63,1.28,2.74,27.41-12.78,27.41-12.78.74,1.58,4.08,7.91,4.89,9.64,0,0,.36-.18.37-.17" transform="translate(-6.29 -174.26)" />
             <path className="cls-1" d="M557.49,206.87s9.53-4.52,9.56-4.46L547.73,220s40.45-24.78,42.72-19.92c2.9,6.22-41.39,32.17-41.39,32.17l22.86-10.66c1.41,3-14.86,16.62-13.73,19,.95,2.05,25.54-14.77,26.63-12.42.16.35-13.21,14.46-11.91,17.24,2.37,5.08,33-19.32,34.49-16.08,1.83,3.91-16.56,14-14.82,17.75,0,0,24.47-14.16,25.52-11.91.65,1.39-30.22,22.46-29,25,0,0,31.06-15.45,31.43-14.65" transform="translate(-6.29 -174.26)" />
           </g>
           <g id="Layer_2" data-name="Layer 2" fill="none" stroke="black" strokeWidth="2">
             <path className="cls-2" d="M89.21,245.45c-3.1,1.4-3.4.05-6.8.05s-3.4,0-6.81,0-3.4,0-6.8,0-3.4-.08-6.8-.08-3.4,0-6.8,0-3.41,0-6.81,0-3.4.1-6.81.1-4-2-6.81,0c.49,4.36,1.62,7.64,3.49,9.78a13,13,0,0,0,4.63,3.49,13.91,13.91,0,0,0,5.69,1,15.31,15.31,0,0,0,7.61-1.94,18.24,18.24,0,0,0,4.72-4.51c3.3-.6,3.35.37,6.69.68s3.35.24,6.69.55,3.34.43,6.69.74,3.73-1,6.72.5a51.84,51.84,0,0,1-4,6A38.79,38.79,0,0,1,78.78,267a32,32,0,0,1-5.91,4.09,31.69,31.69,0,0,1-5.94,2.28,46.8,46.8,0,0,1-6.22,1.41c-2,.31-4.1.51-6.35.65-2,.14-4.14.29-6.38.29-2.68,0-5.21-.05-7.57-.27a53.66,53.66,0,0,1-7.46-1.2,33.94,33.94,0,0,1-7.16-2.44,30,30,0,0,1-5.25-3.32,32.48,32.48,0,0,1-4.46-4.33,38.59,38.59,0,0,1-3.64-5,33.74,33.74,0,0,1-3.08-6.37,38.92,38.92,0,0,1-1.63-6.89,47.4,47.4,0,0,1-.07-14.48,36.86,36.86,0,0,1,1.91-7.19A33.46,33.46,0,0,1,13,217.65,34.61,34.61,0,0,1,17.84,212a33,33,0,0,1,6.31-4.84,36.86,36.86,0,0,1,7.28-3.24,46,46,0,0,1,7.79-1.69,59.23,59.23,0,0,1,8-.58c2.92,0,5.66.08,8.23.33a55.78,55.78,0,0,1,8.1,1.41,34.81,34.81,0,0,1,7.66,2.94,32.46,32.46,0,0,1,5.43,3.39,30.25,30.25,0,0,1,4.48,4.57,31.78,31.78,0,0,1,3.47,5.36,35,35,0,0,1,2.8,7.26,50.18,50.18,0,0,1,1.38,7.67,70.88,70.88,0,0,1,.44,7.8C89.62,244,90.61,244.82,89.21,245.45Zm-27.63-13a28.31,28.31,0,0,0-1.24-6,12.82,12.82,0,0,0-3.05-5.23,12.15,12.15,0,0,0-9-3.42,12.1,12.1,0,0,0-10.38,5.06c-1.65,2.14-2.69,5.41-3.13,9.64,2.76,1.87,3.38-.08,6.72-.08H48.2c3.35,0,3.36-.29,6.69.07S58.43,233.53,61.58,232.42Z" transform="translate(-6.29 -174.26)" />
             <path className="cls-2" d="M176.23,176.36c2.45,2.49,0,3.45,0,6.95s-.06,3.49-.06,7,0,3.49,0,7,0,3.5,0,7,0,3.49,0,7,.1,3.49.1,7-.16,3.49-.16,7,.05,3.49.05,7,.08,3.49.08,7-.14,3.49-.14,7,0,3.49,0,7,.17,3.49.17,7,0,3.5,0,7,2.3,4.44-.05,7c-2.13,2.35-3.21-.1-6.39-.1s-3.17,0-6.35,0-3.18,0-6.36,0-4.69,2.69-6.34,0c-2.72-4.48.9-5.31,0-10.47a52.77,52.77,0,0,1-4.4,5,23.25,23.25,0,0,1-5.35,4,26.13,26.13,0,0,1-6.3,2.47,30.26,30.26,0,0,1-6.75.67,32.17,32.17,0,0,1-6.42-.61,25.32,25.32,0,0,1-6.1-2,23.2,23.2,0,0,1-5.35-3.56,26.21,26.21,0,0,1-4.17-4.88,40,40,0,0,1-3.51-6.1,42.38,42.38,0,0,1-2.38-6.63A48.86,48.86,0,0,1,98.7,245a59.56,59.56,0,0,1-.44-7.05,62.38,62.38,0,0,1,.51-7.2,47.36,47.36,0,0,1,1.21-7.12,34.81,34.81,0,0,1,2.59-6.74,27.94,27.94,0,0,1,4.21-5.85,28.81,28.81,0,0,1,6.07-5.22,27,27,0,0,1,7.33-3.28,31.69,31.69,0,0,1,8-1,33.56,33.56,0,0,1,5.87.52,28,28,0,0,1,5.64,1.7,26,26,0,0,1,5,2.63,27.74,27.74,0,0,1,4.17,3.76c.8-3.29,0-3.38,0-6.76s0-3.39,0-6.78.12-3.39.12-6.77,0-3.4,0-6.79-2.37-4.34,0-6.72,3.37,0,6.79,0,3.43-.07,6.85-.07,3.51.76,6.87,0C173,175.58,173.83,173.91,176.23,176.36ZM149.11,238.5a28,28,0,0,0-.73-6.56,14.09,14.09,0,0,0-2.8-5.94,11.44,11.44,0,0,0-9-4.11,9.93,9.93,0,0,0-8,4,14.33,14.33,0,0,0-2.62,6.34,37.66,37.66,0,0,0-.46,6.89,33,33,0,0,0,.45,6.66,14.17,14.17,0,0,0,2.74,6.06,10.12,10.12,0,0,0,8.19,4,11,11,0,0,0,8.74-3.95,14.32,14.32,0,0,0,2.86-6.35A34.65,34.65,0,0,0,149.11,238.5Z" transform="translate(-6.29 -174.26)" />
             <path className="cls-2" d="M239.35,176.35c2.37-2.44,3.37-.09,6.77-.09s3.4.12,6.8.12,3.41-.11,6.81-.11,4.48-2.43,6.86,0,0,3.54,0,7-.11,3.49-.11,7-.05,3.49-.05,7,0,3.5,0,7,0,3.49,0,7,.09,3.49.09,7-.16,3.49-.16,7,.07,3.49.07,7,0,3.49,0,7,0,3.49,0,7-.16,3.49-.16,7,0,3.49,0,7,0,3.5,0,7,2.42,4.42,0,6.93-3.33,0-6.73,0-3.4,0-6.8,0-3.41,0-6.81,0-4.46,2.49-6.83,0,0-3.52,0-7-.08-3.49-.08-7,.1-3.5.1-7,0-3.49,0-7,0-3.5,0-7-.08-3.49-.08-7,.13-3.49.13-7-.17-3.49-.17-7,.13-3.49.13-7,0-3.5,0-7-.13-3.49-.13-7,.05-3.5.05-7,.74-3.57,0-7C238.56,179.68,236.91,178.85,239.35,176.35Z" transform="translate(-6.29 -174.26)" />
             <path className="cls-2" d="M362.51,245.37c-3.1,1.4-3.37.08-6.77.08s-3.4-.06-6.8-.06-3.4,0-6.8,0H328.53c-3.4,0-3.4.07-6.8.07h-6.82c-3.4,0-4-2-6.81-.07q.73,6.54,3.54,9.74a12.83,12.83,0,0,0,4.59,3.5,13.93,13.93,0,0,0,5.68,1.06,15.44,15.44,0,0,0,7.61-2,18.45,18.45,0,0,0,4.72-4.54c3.3-.6,3.36.38,6.7.69s3.35.23,6.69.54,3.35.33,6.69.64,3.71-.88,6.7.65a52.09,52.09,0,0,1-3.95,6,38.62,38.62,0,0,1-4.95,5.22,31,31,0,0,1-5.91,4.08,31.77,31.77,0,0,1-5.92,2.38,49.07,49.07,0,0,1-6.24,1.34c-2,.31-4.1.53-6.35.68-2,.13-4.15.23-6.39.23q-4,0-7.56-.31a55.77,55.77,0,0,1-7.47-1.17,33.44,33.44,0,0,1-7.09-2.55,29.3,29.3,0,0,1-5.32-3.19,32.36,32.36,0,0,1-4.43-4.34,39.24,39.24,0,0,1-3.7-5,33.74,33.74,0,0,1-3-6.42,37,37,0,0,1-1.84-6.84,52.86,52.86,0,0,1,.12-14.49,37.33,37.33,0,0,1,1.95-7.16,33.14,33.14,0,0,1,3.38-6.6,34.07,34.07,0,0,1,4.7-5.75,33.24,33.24,0,0,1,6.39-4.77,36.56,36.56,0,0,1,7.29-3.19,45.36,45.36,0,0,1,7.78-1.72,57.41,57.41,0,0,1,8-.64c2.92,0,5.66.19,8.23.44a55.28,55.28,0,0,1,8.08,1.46,34.46,34.46,0,0,1,7.68,2.85,32.46,32.46,0,0,1,5.38,3.44,30.74,30.74,0,0,1,4.57,4.48,32.93,32.93,0,0,1,3.49,5.36,35.09,35.09,0,0,1,2.86,7.26,51.48,51.48,0,0,1,1.41,7.68,73.11,73.11,0,0,1,.26,7.83C362.9,244,363.91,244.74,362.51,245.37ZM335,232.5a29.36,29.36,0,0,0-1.23-6.08,13.18,13.18,0,0,0-3-5.3,12.36,12.36,0,0,0-9.07-3.4,12.38,12.38,0,0,0-10.35,5.16c-1.64,2.14-2.65,5.27-3.09,9.49,2.76,1.88,3.3,0,6.64,0s3.35.07,6.69.07,3.37-.39,6.69,0S331.79,233.62,335,232.5Z" transform="translate(-6.29 -174.26)" />
             <path className="cls-2" d="M367,203.24c1.59-2.87,3.34,0,6.62,0s3.28,0,6.56,0,3.29,0,6.57,0,4.11-2.14,6.58,0c2.88,2.53.86,3.75,1.81,7.46s1.12,3.67,2.07,7.39.83,3.75,1.77,7.47,1,3.71,1.92,7.42,1,3.7,2,7.42-1.88,6.38,1.83,7.38c3.23.87.95-3.12,2-6.3s1.1-3.16,2.13-6.35,1-3.19,2-6.38,1-3.19,2-6.38S414,219.22,415,216s.9-3.23,1.93-6.42-.7-4.59,2.14-6.36c3.47-2.16,4.1-.07,8.19-.07s4.09.2,8.18.2,4.65-2.18,8.12,0c2.87,1.77,1.07,3.13,2.14,6.32s1.17,3.16,2.24,6.35,1,3.21,2.08,6.41,1,3.22,2.06,6.41,1.13,3.17,2.2,6.37,1.1,3.19,2.17,6.38-1.13,7.18,2.13,6.33c3.72-1,1-3.66,1.93-7.38s.9-3.74,1.85-7.47,1-3.7,2-7.43.82-3.76,1.77-7.49,1.09-3.69,2.05-7.42-1.11-5,1.77-7.55c2.44-2.16,3.34.21,6.59.21s3.26-.16,6.53-.16,3.26-.05,6.52-.05,4.89-2.74,6.47.11c1.83,3.31-1.16,3.55-2.47,7.09s-1.32,3.53-2.62,7.07-1.38,3.52-2.68,7.06-1.36,3.52-2.66,7.06-1.22,3.58-2.53,7.12-1.21,3.57-2.52,7.12-1.49,3.47-2.8,7-1.13,3.6-2.44,7.15-1.32,3.54-2.63,7.08.41,4.9-2.74,7c-3.35,2.23-4,.19-8,.19s-4-.13-8.06-.13-4.75,2.33-8.09.06c-3.09-2.1-1.08-3.62-2.27-7.17s-1.26-3.54-2.45-7.09-1.12-3.57-2.31-7.12-1.31-3.52-2.51-7.07-1.08-3.59-2.28-7.15,1.26-7-2.5-7-1.26,3.45-2.41,7-1.17,3.55-2.33,7.1-1,3.6-2.16,7.15-1.23,3.52-2.39,7.08-1,3.6-2.16,7.16.65,4.94-2.43,7.05c-3.34,2.28-4-.05-8.07-.05s-4.05,0-8.09,0-4.66,2.26-8,0c-3.15-2.08-1.49-3.4-2.8-6.95s-1.19-3.58-2.5-7.12-1.44-3.5-2.75-7-1.25-3.57-2.56-7.11-1.31-3.54-2.63-7.08-1.19-3.59-2.51-7.13-1.26-3.56-2.57-7.1-1.51-3.47-2.83-7-.4-4-2.48-7.17C367.53,206.88,365.19,206.55,367,203.24Z" transform="translate(-6.29 -174.26)" />
             <path className="cls-2" d="M505,176.35c2.5-2.28,3.36-.07,6.75-.07s3.4.11,6.79.11,3.4,0,6.79,0,4.3-2.35,6.82-.07c2.28,2.07,0,3.11,0,6.19s-.09,3.08-.09,6.16,2.41,4.14.13,6.21c-2.51,2.28-3.44-.14-6.83-.14s-3.39.09-6.78.09-3.4,0-6.8,0-4.21,2.16-6.73-.12c-2.28-2.07,0-3,0-6.09s.67-3.17,0-6.18C504.36,179.24,502.72,178.42,505,176.35Zm0,27c2.34-2.45,3.36-.06,6.75-.06s3.4.11,6.79.11,3.4,0,6.79,0,4.47-2.51,6.82-.06,0,3.56,0,7.11-.09,3.54-.09,7.08.15,3.54.15,7.08-.15,3.54-.15,7.08.09,3.55.09,7.09.05,3.54.05,7.08-.15,3.54-.15,7.08,0,3.55,0,7.09,0,3.55,0,7.09,2.58,4.57.12,7.13-3.43,0-6.82,0h-6.78c-3.4,0-3.4,0-6.8,0s-4.45,2.42-6.8,0,.07-3.55.07-7.09-.14-3.54-.14-7.08.09-3.54.09-7.08,0-3.54,0-7.09-.06-3.54-.06-7.08,0-3.54,0-7.08,0-3.54,0-7.09.06-3.54.06-7.08.72-3.63,0-7.1C504.22,206.68,502.56,205.86,505,203.3Z" transform="translate(-6.29 -174.26)" />
             <path className="cls-2" d="M544.69,254.47c3.08-1.4,3.35-.35,6.72-.67s3.37-.24,6.74-.56l6.74-.64c3.38-.32,3.53-1.76,6.74-.7,1.12,3.2,2.64,5.55,4.64,6.93s4.7,2,8,2c3.64,0,6.47-.73,8.47-2.29a5.27,5.27,0,0,0,2.4-4.32c0-2-1.11-3.43-3.15-4.5a28.47,28.47,0,0,0-5.76-1.62c-1.66-.36-3.6-.87-5.89-1.27s-4.61-.73-6.64-1.13c-2.47-.5-4.65-1-6.57-1.48a55.11,55.11,0,0,1-6.45-1.88,20.08,20.08,0,0,1-5.17-2.86,22.74,22.74,0,0,1-4-4.29,18.31,18.31,0,0,1-2.83-5.36,19.1,19.1,0,0,1-1-6,19.93,19.93,0,0,1,1-6.38,17.59,17.59,0,0,1,3.09-5.66,21.52,21.52,0,0,1,5-4.63,27.54,27.54,0,0,1,6.17-2.95,37.05,37.05,0,0,1,6.26-1.59,61.6,61.6,0,0,1,6.42-.67c2-.14,4.18-.28,6.46-.28s4.36.11,6.3.2c2.31.11,4.4.27,6.27.51a34.88,34.88,0,0,1,6.16,1.24A26.56,26.56,0,0,1,606.2,206a22.82,22.82,0,0,1,4.73,3.54,26.82,26.82,0,0,1,3.91,5.18,38.48,38.48,0,0,1,2.74,5.83c-2.89,1.44-3.2.35-6.41.67s-3.23.27-6.45.59-3.21.4-6.43.72-3.29,1.32-6.45.6a8.75,8.75,0,0,0-3.34-5,13.65,13.65,0,0,0-7.73-2.19c-3.07,0-5.31.58-6.71,1.66a4.9,4.9,0,0,0-2.11,4,4.2,4.2,0,0,0,2.71,3.88,23.1,23.1,0,0,0,5.71,1.53c1.66.3,3.61.59,5.88.86,2.44.28,4.72.6,6.83.94,2.48.39,4.73.86,6.75,1.34a43.47,43.47,0,0,1,6.57,2,25.49,25.49,0,0,1,5.6,3.2,20.31,20.31,0,0,1,4.51,4.61,19.86,19.86,0,0,1,2.55,5.32,19.4,19.4,0,0,1,1,5.81,20.59,20.59,0,0,1-1,6.24,24.69,24.69,0,0,1-2.71,5.71,21.45,21.45,0,0,1-5.17,5.45,30.9,30.9,0,0,1-6.52,3.77,36,36,0,0,1-7,2.17,62.77,62.77,0,0,1-7.32.91c-2.3.18-4.75.39-7.36.39s-4.9-.14-7.14-.28c-2.55-.16-4.93-.36-7.11-.7a48.07,48.07,0,0,1-7-1.54,26,26,0,0,1-11.31-7.31,23.75,23.75,0,0,1-3.52-5.41A27.33,27.33,0,0,1,544.69,254.47Z" transform="translate(-6.29 -174.26)" />
           </g>
         </svg>
       </HeaderImage>

     </div>
    )
  }
}


export default Header;
