import unittest
from pathlib import Path


class BackendBaselineTest(unittest.TestCase):
    def test_backend_entry_and_sqlite_configuration_exist(self):
        root = Path(__file__).resolve().parents[1]
        self.assertTrue((root / "app" / "main.py").is_file())
        database = (root / "app" / "database.py").read_text(encoding="utf-8")
        self.assertIn("sqlite:///", database)
        self.assertTrue((root / "requirements.txt").is_file())


if __name__ == "__main__":
    unittest.main()
