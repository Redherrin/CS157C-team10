package all_your_rock.services;


import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import all_your_rock.models.Article;
import all_your_rock.models.User;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.IOException;

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
	
	public boolean checkLogin(User user) {
		Query query = new Query();
		query.addCriteria(Criteria.where("username").is(user.getUsername()));
		query.addCriteria(Criteria.where("password").is(user.getPassword()));
		return mongoTemplate.exists(query, User.class);
	}
	
}
