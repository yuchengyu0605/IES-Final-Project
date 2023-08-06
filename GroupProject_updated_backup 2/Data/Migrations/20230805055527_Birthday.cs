using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GroupProject3.Data.Migrations
{
    /// <inheritdoc />
    public partial class Birthday : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Birthday",
                table: "Contact",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Birthday",
                table: "Contact");
        }
    }
}
