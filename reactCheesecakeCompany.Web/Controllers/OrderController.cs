using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using reactCheesecakeCompany.Data;
using System;

namespace reactCheesecakeCompany.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly string _connectionString;

        public OrderController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("getall")]
        public List<CheesecakeOrder> GetAll()
        {
            var repo = new CheesecakeRepo(_connectionString);
            return repo.GetAll();
        }

        [HttpPost("addorder")]
        public void AddOrder(CheesecakeOrder c)
        {
            var repo = new CheesecakeRepo(_connectionString);
            repo.AddOrder(c);
        }
        [HttpGet]
        [Route("getbyid")]
        public CheesecakeOrder GetById(int id)
        {
            var repo = new CheesecakeRepo(_connectionString);
            return repo.GetById(id);
        }
    }
}
