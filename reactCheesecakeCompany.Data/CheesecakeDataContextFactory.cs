using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reactCheesecakeCompany.Data;

public class CheesecakeDataContextFactory : IDesignTimeDbContextFactory<CheesecakeDataContext>
{
    public CheesecakeDataContext CreateDbContext(string[] args)
    {
        var config = new ConfigurationBuilder()
           .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), 
           $"..{Path.DirectorySeparatorChar}reactCheesecakeCompany.Web"))
           .AddJsonFile("appsettings.json")
           .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

        return new CheesecakeDataContext(config.GetConnectionString("ConStr"));
    }
}