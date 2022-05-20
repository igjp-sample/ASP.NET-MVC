using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace CoreMVCigGridCRUD.Models
{
    public partial class DBforSampleContext : DbContext
    {
        public DBforSampleContext()
        {
        }

        public DBforSampleContext(DbContextOptions<DBforSampleContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Dummy> Dummy { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Dummy>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .ValueGeneratedNever();

                entity.Property(e => e.Col1).HasMaxLength(50);

                entity.Property(e => e.Col2).HasMaxLength(50);

                entity.Property(e => e.Col3).HasMaxLength(50);

                entity.Property(e => e.Col4).HasMaxLength(50);

                entity.Property(e => e.Col5).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
