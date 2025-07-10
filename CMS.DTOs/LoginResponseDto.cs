using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS.DTOs
{
    public class LoginResponseDto
    {
        public string Token { get; set; }
        public UserResponse User { get; set; }
    }

    public class  UserResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string? Email { get; set; }
    }
}
