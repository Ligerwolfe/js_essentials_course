let userRole = "Non-Subscriber";
let authorization;

if (userRole === "Employee"){
     authorization = "Dietary Services"
} else if (userRole === "Enrolled Member"){
     authorization = "Dietary Services and One-on-one interactions"
} else if (userRole === "SSubscriber"){
     authorization = "Partial Access Dietary Services"
} else if (userRole = "Non-Subscriber") {
     authorization = "Need to enroll first"
}

console.log("UserRole:", userRole)
console.log("Authorization Access:", authorization);