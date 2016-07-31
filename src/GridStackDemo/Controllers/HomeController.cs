using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace GridStackDemo.Controllers
{
    public class HomeController : Controller
    {


        public IActionResult Error()
        {
            return View();
        }

        public IActionResult Test()
        {
            return View();
        }
    }
}
