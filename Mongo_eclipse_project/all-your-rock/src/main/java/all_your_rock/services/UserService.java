package all_your_rock.services;


import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import all_your_rock.models.Article;
import all_your_rock.models.User;

@Service
public class UserService {

	@Autowired
    private MongoTemplate mongoTemplate;
	
	public User findUserById(String id) {
		Query query = new Query();
		User user = mongoTemplate.findOne(query, User.class);
		return user;
	}
	
	public User createUser(User user) {
		user.setId(new ObjectId().toHexString());
		mongoTemplate.save(user);
		return user;
	}
}
