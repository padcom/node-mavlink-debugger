import { Duplex } from 'stream'
import { MavLinkPacket } from 'node-mavlink'

function buffer2hex(buffer: Buffer): string {
  return [...buffer].map(x => x.toString(16)).join('')
}

/**
 * A very simple duplex filter that dumps the entire buffer in a form that (in theory)
 * should allow mission planner to deconstruct them.
 */
export function mavdbg() {
  async function* filter(source: AsyncGenerator<MavLinkPacket>) {
    for await (const packet of source) {
      console.log(buffer2hex(packet.buffer))
      yield packet
    }
  }

  return Duplex.from(filter)
}
