import { TextChunk } from "./text-chunk"
import { MediaChunk } from "./media-chunk"

export interface Chunk{
	type: string,
	data: {
		header: string,
		body: string,
		fileId: string,
		filename: string,
		caption: string,
		source: string,
		uploadDate: string,
		type: string,
		contentType: string
	}
}