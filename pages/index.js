import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as tf from '@tensorflow/tfjs';
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import React from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;
const weights = '/web_model/model.json';

const names = ['person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light',
  'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow',
  'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee',
  'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard',
  'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple',
  'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch',
  'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone',
  'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear',
  'hair drier', 'toothbrush']
const url = "https://media.istockphoto.com/photos/playful-happy-smiling-pet-dog-running-in-the-grass-picture-id1320018473?b=1&k=20&m=1320018473&s=170667a&w=0&h=Q-U9yI4JjCJYSAzXZwpnM4HuaXPzo4K-vBsgO7lanyo="
export default function Home() {
  const [model, setModel] = useState(null)

  const captureAndDetect = (getScreenshot) => {
    const imageSrc = getScreenshot()

  }
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  const WebcamCapture = () => (
      <Webcam
          audio={false}
          height={720}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
            <button
                onClick={() => {captureAndDetect(getScreenshot)}}
            >
              Capture photo
            </button>
        )}
      </Webcam>
  );

  return (
    <div className={styles.container}>
      <WebcamCapture/>
    </div>
  )
}
