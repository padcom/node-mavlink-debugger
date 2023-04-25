#!/usr/bin/env -S npx ts-node

import { SerialPort } from 'serialport'
import {
  MavLinkPacket,
  MavLinkPacketParser,
  MavLinkPacketSplitter
} from 'node-mavlink'

import { mavdbg } from '..'

new SerialPort({ path: '/dev/ttyACM0', baudRate: 115200 })
  .pipe(new MavLinkPacketSplitter())
  .pipe(new MavLinkPacketParser())
  .pipe(mavdbg())
  .resume()
