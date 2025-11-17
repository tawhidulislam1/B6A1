<h5>1/TypeScript-এ interface এবং type দুটোই object এর structure define করতে ব্যবহৃত হয়।</h5>

ইন্টারফেস এ এক্সটেন্ড করা সহজ , টাইপ এ ও করা যায় কিন্তু নাম ভিন্ন দিয়ে ।Declaration Merging — শুধু interface এ possible,Type-এ এটা করা যাবে না।


২/keyof কোনো object type এর সবগুলো key কে union type হিসেবে রিটার্ন করে।<br><br>
Example:(
    type User = {
  id: number;
  name: string;
  city: string;
};

type UserKeys = keyof User;  
let key: UserKeys = "name";
)