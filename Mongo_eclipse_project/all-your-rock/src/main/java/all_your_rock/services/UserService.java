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
		Query query = new Query(Criteria.where("_id").is(id));
		User user = mongoTemplate.findOne(query, User.class);
		return user;
	}
	
	public User findUserByUsername(String username) {
		Query query = new Query(Criteria.where("username").is(username));
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

	public User updateUser(String id, User user) throws Exception {
		Query query = new Query(Criteria.where("_id").is(id));
        User updatedUser = mongoTemplate.findOne(query, User.class);
        
        if(updatedUser == null) {
        	throw new Exception("Article does not exist with id " + id);
        }
        
        updatedUser.setUsername(user.getUsername());
        updatedUser.setPassword(user.getPassword());
    	updatedUser.setEmail(user.getEmail());
    	updatedUser.setFirstName(user.getFirstName());
    	updatedUser.setLastName(user.getLastName());

        return mongoTemplate.save(updatedUser);
	}
	
}
