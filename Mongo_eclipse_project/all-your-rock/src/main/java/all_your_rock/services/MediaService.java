package all_your_rock.services;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.mongodb.core.query.Criteria;

import java.io.IOException;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;

import all_your_rock.models.Media;
import all_your_rock.models.MediaHeader;

@Service
public class MediaService {

	@Autowired
	private MongoTemplate mongoTemplate;
	
//	public Media createMedia(Media media) {
//		media.setId(new ObjectId().toHexString());
//		return mongoTemplate.save(media);
//	}

	public Media findMediaById(String id) {
		Query query = new Query(Criteria.where("_id").is(id));
		return mongoTemplate.findOne(query, Media.class);
	}

	public MediaHeader createMedia(MultipartFile file) {
		Media media = new Media();
		System.out.println(file.getOriginalFilename());
		System.out.println(file.getContentType());
		System.out.println(file.getName());
		System.out.println(file.getSize());
		String id = new ObjectId().toHexString();
		media.setId(id);
		media.setContentType(file.getContentType());
		try {
			media.setData(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
		} catch (IOException e) {
			e.getMessage();
		}
		mongoTemplate.save(media);
		
		MediaHeader header = new MediaHeader();
		header.setFilename(file.getOriginalFilename());
		header.setFileId(id);
		header.setContentType(file.getContentType());
		header.setType(file.getContentType().split("/")[0]);
		System.out.println("HEADER TYPE: " + header.getType());
		
		return header;
		
	}

}
