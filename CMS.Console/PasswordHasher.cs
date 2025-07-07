namespace CMS.ConsoleApp
{
    public class PasswordHasher
    {
        public static void HashPassword()
        {
            Console.WriteLine("Enter password to hash: ");
            var plainPassword = Console.ReadLine()?.Trim();

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(plainPassword?.Trim());
            Console.WriteLine($"\n Hashed Password:\n{hashedPassword}");
        }
    }
}
