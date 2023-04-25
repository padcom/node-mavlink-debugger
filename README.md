# Simple debugger for node-mavlink

It's a silly thing, but if you want to verify what other tools understand from the packets you received it's good to have the data to feed it in.

This simple filter takes the packet and dumps it onto console in such a form that can be copy-pasted into mission-planner.

## Installation

To install the package issue the following command:

```bash
$ npm install --save node-mavlink-debugger
```

## Usage

The simplest usage is to just `.pipe()` it in just after the packet parser:

```typescript
import { SerialPort } from 'serialport'
import {
  MavLinkPacket,
  MavLinkPacketParser,
  MavLinkPacketSplitter
} from 'node-mavlink'

import { mavdbg } from 'node-mavlink-debugger'

new SerialPort({ path: '/dev/ttyACM0', baudRate: 115200 })
  .pipe(new MavLinkPacketSplitter())
  .pipe(new MavLinkPacketParser())
  .pipe(mavdbg())
  .resume()
```

## Closing thoughts

That's the first approach into making working with MavLink approachable. It's really a disaster if you don't know what the packets flying around mean.

I think that in the future this package will grow substantially, so stay tuned!


Happy coding!
