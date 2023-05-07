import { TextChunk } from "./text-chunk"
import { MediaChunk } from "./media-chunk"

export interface Chunk<Type>{
	type: string,
	data: TextChunk|MediaChunk
}