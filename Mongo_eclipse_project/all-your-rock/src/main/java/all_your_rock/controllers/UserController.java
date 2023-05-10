package all_your_rock.controllers;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import all_your_rock.models.User;
import all_your_rock.services.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.IOException;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	private MongoDatabase db;
	private MongoCollection<User> users;
	private UserService userService;
	private SecretKey secret;
	
	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
		try {
			Scanner in = new Scanner(new File("secret"));
			byte[] raw = Decoders.BASE64.decode(in.nextLine());
			this.secret = new SecretKeySpec(raw, 0, raw.length, "HmacSHA256");
		} catch (IOException e) {
			System.out.println(e.getMessage());
		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		}
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> findUserById(@PathVariable("id") String id) {
		User user = userService.findUserById(id);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> createUser(@RequestBody User user) {
		User newUser = userService.createUser(user);
		return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	@ResponseBody
	public Map<String, String> authorize(@RequestBody User user) {
		Map<String, String> response = new HashMap<String, String>();
		if (userService.checkLogin(user)) {
			String jwt = Jwts.builder()
					.setHeaderParam("alg", "HS256")
					.setHeaderParam("typ", "JWS")
					.claim("id", user.getId())
					.claim("username", user.getUsername())
					.signWith(this.secret)
					.compact();
//			System.out.println(":jwt: " + jwt);
			response.put("status", "success");
			response.put("jwt", jwt);
			return response;
		}
		response.put("status", "failure");
		return response;
	}
	
}
