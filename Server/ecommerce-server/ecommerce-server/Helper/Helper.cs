using System.Security.Cryptography;

namespace ecommerce_server.Helper
{
    public class Helper
    {
        // Method to generate a salt
        public static byte[] GenerateSalt(int size = 16)
        {
            using (var rng = new RNGCryptoServiceProvider())
            {
                byte[] salt = new byte[size];
                rng.GetBytes(salt);
                return salt;
            }
        }

        // Method to generate the password hash using PBKDF2
        public static byte[] GenerateHash(string password, byte[] salt, int iterations = 10000, int hashByteSize = 20)
        {
            using (var pbkdf2 = new Rfc2898DeriveBytes(password, salt, iterations))
            {
                return pbkdf2.GetBytes(hashByteSize);
            }
        }
    }
}
