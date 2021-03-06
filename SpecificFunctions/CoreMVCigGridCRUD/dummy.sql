USE [DBforSample]
GO
/****** Object:  Table [dbo].[Dummy]    Script Date: 2021/08/21 22:53:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dummy](
	[ID] [int] NOT NULL,
	[Col1] [nvarchar](50) NULL,
	[Col2] [nvarchar](50) NULL,
	[Col3] [nvarchar](50) NULL,
	[Col4] [nvarchar](50) NULL,
	[Col5] [nvarchar](50) NULL,
 CONSTRAINT [PK_dummy] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (1, N'A1', N'A2', N'A3', N'A4', N'A5')
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (2, N'B1', N'B2', N'B3', N'B4', N'B5')
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (3, N'C1', N'C2', N'C3', N'C4', N'C5')
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (4, N'D1', N'D2', N'D3', N'D4', N'D5')
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (5, N'E1', N'E2', N'E3', N'E4', N'E5')
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (6, N'F1', N'F2', N'F3', N'F4', N'F5')
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (7, N'G1', N'G2', N'G3', N'G4', N'G5')
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (8, N'H1', N'H2', N'H3', N'H4', N'H5')
INSERT [dbo].[Dummy] ([ID], [Col1], [Col2], [Col3], [Col4], [Col5]) VALUES (9, N'I1', N'I2', N' I6', N'I4', N'I6  ')
GO
