package all_your_rock.controllers;

import java.util.Optional;

import org.bson.Document;
import org.bson.codecs.configuration.CodecRegistries;
import org.bson.codecs.pojo.PojoCodecProvider;
import org.bson.types.Binary;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import all_your_rock.models.Media;
import all_your_rock.models.MediaHeader;
import all_your_rock.services.MediaService;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

@RestController
@RequestMapping("/media")
@CrossOrigin(origins = "http://localhost:4200")
public class MediaController {
	
	private MongoCollection<Media> articles;
	private MongoDatabase db;
	private MediaService mediaService;
	
	@Autowired
    public MediaController(MediaService mediaService) {
        //this.db = db; 
        //this.articles = db.getCollection("articles", Article.class);
        this.mediaService = mediaService;
    }
	
//	@GetMapping("/{id}")
//    public ResponseEntity<Media> findMediaById(@PathVariable("id") String id) {
//        Media media = mediaService.findMediaById(id);
//        return new ResponseEntity<Media>(media, HttpStatus.OK);
//    }
	
	@GetMapping("/{id}")
    public ResponseEntity<byte[]> findMediaById(@PathVariable("id") String id) {
        Media media = mediaService.findMediaById(id);
        HttpHeaders headers = new HttpHeaders();
        switch (media.getContentType()) {
        	case ("image/jpeg"):
        		headers.setContentType(MediaType.IMAGE_JPEG);
        		break;
        	case ("image/png"):
        		headers.setContentType(MediaType.IMAGE_JPEG);
        		break;
        	case ("image/gif"):
        		headers.setContentType(MediaType.IMAGE_GIF);
        		break;
        }
        
//        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(media.getData());
        return new ResponseEntity<byte[]>(media.getData().getData(), headers, HttpStatus.OK);
    }
	
	@PostMapping("/upload")
	public ResponseEntity<MediaHeader> createArticle(@RequestBody MultipartFile file) {
		MediaHeader header = mediaService.createMedia(file);
//		System.out.println(media.getData());
		return new ResponseEntity<MediaHeader>(header, HttpStatus.CREATED);
	}
	

}
