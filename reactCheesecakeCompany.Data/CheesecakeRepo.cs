using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reactCheesecakeCompany.Data
{
    public class CheesecakeRepo
    {
        private readonly string _connectionString;
        public CheesecakeRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<CheesecakeOrder> GetAll()
        {
            var context = new CheesecakeDataContext(_connectionString);
            return context.CheesecakeOrders.ToList();
        }
        public void AddOrder(CheesecakeOrder c)
        {
            var context = new CheesecakeDataContext(_connectionString);
            context.CheesecakeOrders.Add(c);
            context.SaveChanges();
        }
        public CheesecakeOrder GetById(int id)
        {
            var context = new CheesecakeDataContext(_connectionString);
            return context.CheesecakeOrders.FirstOrDefault(c => c.Id == id);
        }
    }
}
