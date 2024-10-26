// validate auth bearer token 
type AuthHeaders = {
    Token: `Bearer ${string}.${string}.${string}`
}


// const example2: AuthHeaders = {
//     //❌ Token should start with 'Bearer'
//     Token: "abc.def.ghi",
//   };
  
//   const example3: AuthHeaders = {
//     //❌ Token should start with 'Bearer'
//     Token: "hello.world.token",
//   };
  
//   const example4: AuthHeaders = {
//     //❌ Token is invalid, only 1 part.
//     Token: "Bearer kdjfl",
//   };
  
//   const example6: AuthHeaders = {
//     //❌ Token is invalid, only 2 parts.
//     Token: "Bearer ksdjhf.123",
//   };
  

  const example5: AuthHeaders = {
    Token: "Bearer ksdjhf.123.sagar",
  };
  