import json
import unittest
from pathlib import Path


class BaselineFilesTest(unittest.TestCase):
    def test_backend_and_frontend_contracts_exist(self):
        root = Path(__file__).resolve().parents[1]
        requirements = root / "backend" / "requirements.txt"
        frontend_manifest = root / "frontend" / "package.json"
        self.assertTrue(requirements.is_file())
        self.assertTrue(frontend_manifest.is_file())
        manifest = json.loads(frontend_manifest.read_text(encoding="utf-8"))
        self.assertIn("build", manifest.get("scripts", {}))


if __name__ == "__main__":
    unittest.main()
